
export type User = {
  _id: string;
  name: string;
  imageUrlCached: string;
}

export type UserGroupRelation = {
  _id: string,
  relatedGroup: UserGroup,
  relatedUser: User,
  createdAt: Date,
}

export type UserGroup = {
  _id: string,
  userGroupId:string;
  name: string;
  createdAt: Date;
}
