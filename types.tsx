/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NewTweet: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Notifications: undefined;
  Messages: undefined;
};

export type HomeNavigatorParamList = {
  HomeScreen: undefined;
};

export type SearchNavigatorParamList = {
  SearchScreen: undefined;
};

export type NotificationsNavigatorParamList = {
  NotificationsScreen: undefined;
};

export type MessagesNavigatorParamList = {
  MessagesScreen: undefined;
};

export type UserType = {
  id: string,
  name: string,
  username: string,
  image?: string,
};

export type TweetType = {
  id: string,
  user: UserType,
  createdAt: string,
  content: string,
  image?: string,
  numberOfComments?: number,
  numberOfRetweets?: number,
  numberOfLikes?: number,
};
