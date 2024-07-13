import { PrismaClient } from "@prisma/client";

declare global {
  namespace globalThis {
    var prismadb: PrismaClient;
  }
}

type InputProps = {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
};

type NavbarItemProps = {
  label: string;
};

type MobileMenuProps = {
  visible?: boolean;
};

type AccountMenuProps = {
  visible?: boolean;
};

type MovieListProps = {
  data: Record<string, any>[];
  title: string;
}

type MovieCardProps = {
 data: Record<string. any>;
}

type FavoriteButtonProps = {
  movieId: string;
}

type PlayButtonProps = {
  movieId: string;
}

type ModalStoreInterface = {
  movieId? : string;
  isOpen: boolean;
  openModal: (movieId: string) => void;
  closeModal: () => void;
}

type InfoModalProps = {
  visible?: boolean,
  onClose: any
}
