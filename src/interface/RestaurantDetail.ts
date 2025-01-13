
export interface Restaurant {
    id: number;
    title: string;
    image: string[];
    ratings: number;
    time: string;
    distance: string;
    description?: string;
    offer: string;
    address: string;
    category: Categories[];
    items: Items[];
  }

  export interface Categories {
    id: number;
    title: string;
  }

  export interface Items {
    id: number;
    title: string;
    image: string;
    price: number;
    ratings: number;
    description: string;
    category: Categories[];
    addOns: AddOns[];
  }

  export interface AddOns {
    id: number;
    title: string;
    price: number;
  }
