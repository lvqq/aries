import axios from 'axios';

import {
  PostPetPetIdUploadImageRequestPath,
  PostPetRequestBody,
  PutPetRequestBody,
  GetPetFindByStatusRequestQuery,
  GetPetFindByTagsRequestQuery,
  GetPetPetIdRequestPath,
  PostPetPetIdRequestPath,
  DeletePetPetIdRequestPath,
  PostStoreOrderRequestBody,
  GetStoreOrderOrderIdRequestPath,
  DeleteStoreOrderOrderIdRequestPath,
  PostUserCreateWithArrayRequestBody,
  PostUserCreateWithListRequestBody,
  GetUserUsernameRequestPath,
  PutUserUsernameRequestPath,
  PutUserUsernameRequestBody,
  DeleteUserUsernameRequestPath,
  GetUserLoginRequestQuery,
  PostUserRequestBody,
} from './output.swagger.request.types';

/**
 * @summary uploads an image
 */
export const postPetPetIdUploadImage = (args: {
  path: PostPetPetIdUploadImageRequestPath;
}) => axios.post(`/v2/pet/${args.path.petId}/uploadImage`, {});

/**
 * @summary Add a new pet to the store
 */
export const postPet = (args: {
  data: PostPetRequestBody;
}) => axios.post('/v2/pet', {
  data: args.data
});

/**
 * @summary Update an existing pet
 */
export const putPet = (args: {
  data: PutPetRequestBody;
}) => axios.put('/v2/pet', {
  data: args.data
});

/**
 * @summary Finds Pets by status
 * @description Multiple status values can be provided with comma separated strings
 */
export const getPetFindByStatus = (args: {
  params: GetPetFindByStatusRequestQuery;
}) => axios.get('/v2/pet/findByStatus', {
  params: args.params
});

/**
 * @summary Finds Pets by tags
 * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 */
export const getPetFindByTags = (args: {
  params: GetPetFindByTagsRequestQuery;
}) => axios.get('/v2/pet/findByTags', {
  params: args.params
});

/**
 * @summary Find pet by ID
 * @description Returns a single pet
 */
export const getPetPetId = (args: {
  path: GetPetPetIdRequestPath;
}) => axios.get(`/v2/pet/${args.path.petId}`, {});

/**
 * @summary Updates a pet in the store with form data
 */
export const postPetPetId = (args: {
  path: PostPetPetIdRequestPath;
}) => axios.post(`/v2/pet/${args.path.petId}`, {});

/**
 * @summary Deletes a pet
 */
export const deletePetPetId = (args: {
  path: DeletePetPetIdRequestPath;
}) => axios.delete(`/v2/pet/${args.path.petId}`, {});

/**
 * @summary Place an order for a pet
 */
export const postStoreOrder = (args: {
  data: PostStoreOrderRequestBody;
}) => axios.post('/v2/store/order', {
  data: args.data
});

/**
 * @summary Find purchase order by ID
 * @description For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 */
export const getStoreOrderOrderId = (args: {
  path: GetStoreOrderOrderIdRequestPath;
}) => axios.get(`/v2/store/order/${args.path.orderId}`, {});

/**
 * @summary Delete purchase order by ID
 * @description For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 */
export const deleteStoreOrderOrderId = (args: {
  path: DeleteStoreOrderOrderIdRequestPath;
}) => axios.delete(`/v2/store/order/${args.path.orderId}`, {});

/**
 * @summary Returns pet inventories by status
 * @description Returns a map of status codes to quantities
 */
export const getStoreInventory = () => axios.get('/v2/store/inventory', {});

/**
 * @summary Creates list of users with given input array
 */
export const postUserCreateWithArray = (args: {
  data: PostUserCreateWithArrayRequestBody;
}) => axios.post('/v2/user/createWithArray', {
  data: args.data
});

/**
 * @summary Creates list of users with given input array
 */
export const postUserCreateWithList = (args: {
  data: PostUserCreateWithListRequestBody;
}) => axios.post('/v2/user/createWithList', {
  data: args.data
});

/**
 * @summary Get user by user name
 */
export const getUserUsername = (args: {
  path: GetUserUsernameRequestPath;
}) => axios.get(`/v2/user/${args.path.username}`, {});

/**
 * @summary Updated user
 * @description This can only be done by the logged in user.
 */
export const putUserUsername = (args: {
  path: PutUserUsernameRequestPath;
  data: PutUserUsernameRequestBody;
}) => axios.put(`/v2/user/${args.path.username}`, {
  data: args.data
});

/**
 * @summary Delete user
 * @description This can only be done by the logged in user.
 */
export const deleteUserUsername = (args: {
  path: DeleteUserUsernameRequestPath;
}) => axios.delete(`/v2/user/${args.path.username}`, {});

/**
 * @summary Logs user into the system
 */
export const getUserLogin = (args: {
  params: GetUserLoginRequestQuery;
}) => axios.get('/v2/user/login', {
  params: args.params
});

/**
 * @summary Logs out current logged in user session
 */
export const getUserLogout = () => axios.get('/v2/user/logout', {});

/**
 * @summary Create user
 * @description This can only be done by the logged in user.
 */
export const postUser = (args: {
  data: PostUserRequestBody;
}) => axios.post('/v2/user', {
  data: args.data
});

