export interface ApiResponse {
  code: number;  // int32
  type: string;
  message: string;
}
export interface Category {
  id: number;  // int64
  name: string;
}
export interface Pet {
  id?: number;  // int64
  category?: Category;
  /**
   * example: doggie
   */
  name: string;
  photoUrls: string[];
  tags?: Tag[];
  /**
   * pet status in the store
   */
  status?: "available" | "pending" | "sold";
}
export interface Tag {
  id: number;  // int64
  name: string;
}
export interface Order {
  id: number;  // int64
  petId: number;  // int64
  quantity: number;  // int32
  shipDate: string;  // date-time
  /**
   * Order Status
   */
  status: "placed" | "approved" | "delivered";
  complete: boolean;
}
export interface User {
  id: number;  // int64
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  /**
   * User Status
   */
  userStatus: number;  // int32
}
