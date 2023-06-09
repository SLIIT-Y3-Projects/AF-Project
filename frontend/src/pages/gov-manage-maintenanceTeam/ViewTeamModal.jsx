import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function ViewTeamModal({
  isViewTeamModalOpen,
  closeViewTeamModal,
  selectedTeam,
}) {

  return (
    <>
      <Transition appear show={isViewTeamModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeViewTeamModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl font-medium leading-6 text-gray-900"
                  >
                    {selectedTeam.teamName}
                  </Dialog.Title>

                  <hr className="my-4" />
                  <div className="text-gray-900">
                    <p className="text-lg">
                      Team Leader: {selectedTeam.teamLeader}
                    </p>
                  </div>

                  <div className="mt-2">
                    <p className="text-lg">Team Members:</p>
                    <ul className="list-disc list-inside">
                      {selectedTeam.teamMembers?.map((member) => (
                        <li key={member}>{member}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeViewTeamModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
