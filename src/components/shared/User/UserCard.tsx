import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { Field, Form, Formik } from "formik";
import { CardBox } from "../CardBox";
import { FormCheckRadio } from "../FormField";
import { PillTag } from "../PillTag";
import UserAvatar from "./UserAvatar";
import { Github } from "@/components/shared/icons";
import type { Icon } from "@layout/types";

import { useSession } from "next-auth/react";

type Props = {
  className?: string;
  userName: string;
};

const UserCard = ({ className, userName }: Props) => {
  return (
    <CardBox className={className}>
      <div className="flex flex-col items-center justify-around lg:flex-row lg:justify-center">
        <div className="space-y-3 text-center md:text-left lg:mx-12">
          <div className="flex justify-center md:block">
            <Formik
              initialValues={{
                notifications: ["1"],
              }}
              onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
            ></Formik>
          </div>
          <h1 className="text-2xl">
            Howdy, <b>{userName}</b>!
          </h1>
        </div>
      </div>
    </CardBox>
  );
};

const LoginVerified = () => (
  <div>
    <p>
      Last login <b>12 mins ago</b> from <b>127.0.0.1</b>
    </p>
    <div className="flex justify-center md:block">
      <PillTag label="Verified" color="info" icon={<CheckBadgeIcon />} />
    </div>
  </div>
);

export default UserCard;
