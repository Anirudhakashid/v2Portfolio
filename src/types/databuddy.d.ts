declare module "@databuddy/sdk/react" {
  import { ComponentType } from "react";

  interface DatabuddyProps {
    clientId: string;
    enableBatching?: boolean;
    [key: string]: unknown;
  }

  export const Databuddy: ComponentType<DatabuddyProps>;
}
