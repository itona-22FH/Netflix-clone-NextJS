import React, { useCallback, useMemo } from "react";
import axios from "axios";
import { FavoriteButtonProps } from "@/@types/global";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import useFavorites from "@/hooks/useFavorites";
import useCurrentUser from "@/hooks/useCurrentUser";

const FavoriteButton = ({ movieId }: FavoriteButtonProps) => {
  const { mutate: mutateFavorites } = useFavorites();
  const { data: currentUser, mutate } = useCurrentUser();

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];
    return list.includes(movieId);
  }, [currentUser, movieId]);

  const toggleFavorites = useCallback(async () => {
    let response;

    if (!isFavorite) {
      response = await axios.post("/api/favorite", { movieId });
    } else {
      response = await axios.delete("/api/favorite", { data: { movieId } });
    }

    const updatedFavoriteIds = response?.data?.favoriteIds;

    mutate({
      ...currentUser,
      favoriteIds: updatedFavoriteIds,
    });

    mutateFavorites();
  }, [movieId, isFavorite, currentUser, mutate, mutateFavorites]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      onClick={toggleFavorites}
      className="
        cursor-pointer
        group/item
        w-6
        h-6
        lg:w-10
        lg:h-10
        border-white
        border-2
        rounded-full
        flex
        justify-center
        items-center
        transition
        hover:border-neutral-300
    "
    >
      <Icon className="text-white" size={30} />
    </div>
  );
};

export default FavoriteButton;
