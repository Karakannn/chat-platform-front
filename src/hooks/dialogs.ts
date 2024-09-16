import { RootState } from "@/store";
import { append, destroy, destroyAll, Dialog } from "@/store/dialog";
import { useDispatch, useSelector } from "react-redux";

const useDialog = () => {
  const dispatch = useDispatch();
  const dialogs = useSelector((state: RootState) => state.dialog.dialogs);

  return {
    dialogs,
    createDialog: (dialog: Dialog) => dispatch(append(dialog)),
    destroyDialog: (name: string) => dispatch(destroy({ name })),
    destroyAllDialogs: () => dispatch(destroyAll()),
  };
};

export default useDialog;
