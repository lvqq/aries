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

/**
 * @method post
 * @path /pet/{petId}/uploadImage
 */
export interface PostPetPetIdUploadImageRequestPath {
  /**
   * ID of pet to update
   */
  petId: number;  // int64
}
export interface PostPetPetIdUploadImageRequestFormData {
  /**
   * Additional data to pass to server
   */
  additionalMetadata?: string;
  /**
   * file to upload
   */
  file?: File;
}
export type PostPetPetIdUploadImageResponse = ApiResponse;
/**
 * @method post
 * @path /pet
 */
export type PostPetRequestBody = Pet;
export interface PostPetResponse {
  code: number;  // int32
  type: string;
  message: string;
  data: Pet;
}
/**
 * @method put
 * @path /pet
 */
export type PutPetRequestBody = Pet;
/**
 * @method get
 * @path /pet/findByStatus
 */
export interface GetPetFindByStatusRequestQuery {
  /**
   * Status values that need to be considered for filter
   */
  status: ("available" | "pending" | "sold")[];
}
export type GetPetFindByStatusResponse = Pet[];
/**
 * @method get
 * @path /pet/findByTags
 */
export interface GetPetFindByTagsRequestQuery {
  /**
   * Tags to filter by
   */
  tags: string[];
}
export type GetPetFindByTagsResponse = Pet[];
/**
 * @method get
 * @path /pet/{petId}
 */
export interface GetPetPetIdRequestPath {
  /**
   * ID of pet to return
   */
  petId: number;  // int64
}
export type GetPetPetIdResponse = Pet;
/**
 * @method post
 * @path /pet/{petId}
 */
export interface PostPetPetIdRequestPath {
  /**
   * ID of pet that needs to be updated
   */
  petId: number;  // int64
}
export interface PostPetPetIdRequestFormData {
  /**
   * Updated name of the pet
   */
  name?: string;
  /**
   * Updated status of the pet
   */
  status?: string;
}
/**
 * @method delete
 * @path /pet/{petId}
 */
export interface DeletePetPetIdRequestHeader {
  api_key?: string;
}
export interface DeletePetPetIdRequestPath {
  /**
   * Pet id to delete
   */
  petId: number;  // int64
}
/**
 * @method post
 * @path /store/order
 */
export type PostStoreOrderRequestBody = Order;
export type PostStoreOrderResponse = Order;
/**
 * @method get
 * @path /store/order/{orderId}
 */
export interface GetStoreOrderOrderIdRequestPath {
  /**
   * ID of pet that needs to be fetched
   */
  orderId: number;  // int64
}
export type GetStoreOrderOrderIdResponse = Order;
/**
 * @method delete
 * @path /store/order/{orderId}
 */
export interface DeleteStoreOrderOrderIdRequestPath {
  /**
   * ID of the order that needs to be deleted
   */
  orderId: number;  // int64
}
/**
 * @method get
 * @path /store/inventory
 */
export interface GetStoreInventoryResponse {
  [name: string]: number;  // int32
}
/**
 * @method post
 * @path /user/createWithArray
 */
export type PostUserCreateWithArrayRequestBody = User[];
/**
 * @method post
 * @path /user/createWithList
 */
export type PostUserCreateWithListRequestBody = User[];
/**
 * @method get
 * @path /user/{username}
 */
export interface GetUserUsernameRequestPath {
  /**
   * The name that needs to be fetched. Use user1 for testing. 
   */
  username: string;
}
export type GetUserUsernameResponse = User;
/**
 * @method put
 * @path /user/{username}
 */
export interface PutUserUsernameRequestPath {
  /**
   * name that need to be updated
   */
  username: string;
}
export type PutUserUsernameRequestBody = User;
/**
 * @method delete
 * @path /user/{username}
 */
export interface DeleteUserUsernameRequestPath {
  /**
   * The name that needs to be deleted
   */
  username: string;
}
/**
 * @method get
 * @path /user/login
 */
export interface GetUserLoginRequestQuery {
  /**
   * The user name for login
   */
  username: string;
  /**
   * The password for login in clear text
   */
  password: string;
}
export type GetUserLoginResponse = string;
/**
 * @method post
 * @path /user
 */
export type PostUserRequestBody = User;
