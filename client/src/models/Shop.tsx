interface ShopItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  unlimited: boolean;
  stock?: number;
}

export default ShopItem;
