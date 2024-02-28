import { React } from "replugged/common";

export const play = React.memo((props: React.ComponentProps<"svg">): React.ReactElement => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm8.856-3.845A1.25 1.25 0 0 0 9 9.248v5.504a1.25 1.25 0 0 0 1.856 1.093l5.757-3.189a.75.75 0 0 0 0-1.312l-5.757-3.189Z"
        fill="currentColor"
      />
    </svg>
  );
});

export const queue = React.memo((props: React.ComponentProps<"svg">): React.ReactElement => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        d="M5 4C5 2.89543 5.89543 2 7 2H12.5001L12.5 6.74998C12.5 7.71649 13.2835 8.50002 14.25 8.50002H19V11.1739C18.5185 11.0602 18.0163 11 17.5 11C13.9101 11 11 13.9101 11 17.5C11 18.0163 11.0602 18.5185 11.1739 19H7C5.89543 19 5 18.1046 5 17V4ZM8 5.75C8 6.16421 8.33579 6.5 8.75 6.5H10.25C10.6642 6.5 11 6.16421 11 5.75C11 5.33579 10.6642 5 10.25 5H8.75C8.33579 5 8 5.33579 8 5.75ZM8.75 8C8.33579 8 8 8.33579 8 8.75C8 9.16421 8.33579 9.5 8.75 9.5H10.25C10.6642 9.5 11 9.16421 11 8.75C11 8.33579 10.6642 8 10.25 8H8.75ZM8 11.75C8 12.1642 8.33579 12.5 8.75 12.5H10.25C10.6642 12.5 11 12.1642 11 11.75C11 11.3358 10.6642 11 10.25 11H8.75C8.33579 11 8 11.3358 8 11.75ZM12.8096 22C12.3832 21.5557 12.0194 21.051 11.7322 20.5H6.5C4.84315 20.5 3.5 19.1569 3.5 17.5V15.75C3.5 15.3358 3.16421 15 2.75 15C2.33579 15 2 15.3358 2 15.75V17.5C2 19.9853 4.01472 22 6.5 22H12.8096ZM18.9995 7.00002L14.0001 2.00159L14 6.75001C14 6.88808 14.1119 7.00002 14.25 7.00002H18.9995ZM23 17.5C23 14.4624 20.5376 12 17.5 12C14.4624 12 12 14.4624 12 17.5C12 20.5376 14.4624 23 17.5 23C20.5376 23 23 20.5376 23 17.5ZM18.0006 18L18.0011 20.5035C18.0011 20.7797 17.7773 21.0035 17.5011 21.0035C17.225 21.0035 17.0011 20.7797 17.0011 20.5035L17.0006 18H14.4956C14.2197 18 13.9961 17.7762 13.9961 17.5C13.9961 17.2239 14.2197 17 14.4956 17H17.0005L17 14.4993C17 14.2231 17.2239 13.9993 17.5 13.9993C17.7761 13.9993 18 14.2231 18 14.4993L18.0005 17H20.4966C20.7725 17 20.9961 17.2239 20.9961 17.5C20.9961 17.7762 20.7725 18 20.4966 18H18.0006ZM12.5001 2L13.9985 2.00003Z"
        fill="currentColor"
      />
    </svg>
  );
});

export const noLive = React.memo((props: React.ComponentProps<"svg">): React.ReactElement => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l2.202 2.203c-3.392 3.93-3.223 9.872.506 13.601a1 1 0 0 0 1.415-1.414A8.004 8.004 0 0 1 5.84 6.902l1.521 1.52a5.922 5.922 0 0 0 .533 7.763A1 1 0 0 0 9.31 14.77a3.922 3.922 0 0 1-.513-4.913l1.836 1.836a1.5 1.5 0 0 0 1.838 1.838l8.25 8.25a.75.75 0 0 0 1.06-1.061L3.28 2.22ZM19.028 15.846l1.461 1.462c2.414-3.861 1.943-9.012-1.415-12.37a1 1 0 1 0-1.414 1.415 8.006 8.006 0 0 1 1.368 9.493Z"
      />
      <path
        fill="currentColor"
        d="m15.93 12.748 1.59 1.591a5.922 5.922 0 0 0-1.252-6.527 1 1 0 1 0-1.415 1.414 3.916 3.916 0 0 1 1.077 3.522Z"
      />
    </svg>
  );
});

export default { play, queue, noLive };
