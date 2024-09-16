import { lazy, LazyExoticComponent, ComponentType } from "react";

const CreateConversation = lazy(() => import("@/components/dialogs/create-conversation"));

type DialogData = {
  name: string;
  element: LazyExoticComponent<ComponentType<any>>;
};

const dialogsData: DialogData[] = [{ name: "create-conversation", element: CreateConversation }];

export default dialogsData;
