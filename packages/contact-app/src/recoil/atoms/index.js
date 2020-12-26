import { atom } from "recoil";

import { ALL_CONTACTS } from "./keys";

// To-Do decouple it and move it inside contact form
export const contactList = atom({
  key: ALL_CONTACTS,
  default: []
});
