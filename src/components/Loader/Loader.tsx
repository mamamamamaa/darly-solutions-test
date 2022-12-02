import React, { FC } from "react";
import { Oval } from "react-loader-spinner";

export const Loader: FC = () => {
  return (
    <div className="flex justify-center">
      <Oval
        height={100}
        width={100}
        color="gray"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="white"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};
