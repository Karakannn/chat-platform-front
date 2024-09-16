import React, { Suspense } from "react";
import dialogsData from "@/lib/dialogs";
import useDialog from "@/hooks/dialogs";
import { Dialog } from "@/components/ui/dialog";

type DialogProviderProps = {};

const DialogProvider: React.FC<DialogProviderProps> = () => {
  
  const { dialogs, destroyDialog } = useDialog();

  return (
    <>
      {dialogs.length > 0 &&
        dialogs.map((item, index) => {
          const selectedDialog = dialogsData.find((dialog) => dialog.name === item.name);

          if (!selectedDialog) return null;

          const DialogComponent = selectedDialog.element;

          return (
            <Suspense key={index} fallback={<></>}>
              <Dialog
                defaultOpen
                onOpenChange={(state) => {
                  if (!state) destroyDialog(item.name);
                }}
              >
                <DialogComponent data={item.data} />
              </Dialog>
            </Suspense>
          );
        })}
    </>
  );
};

export default DialogProvider;
