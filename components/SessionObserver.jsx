import { setSessionValidity } from "@/redux/slices/settingsSlice";
import { isSessionValid } from "@/utils/authentication";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const SessionObserver = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (isSessionValid()) {
      dispatch(setSessionValidity({ isValid: true }));
    } else {
      dispatch(setSessionValidity({ isValid: false }));

      if (router.asPath.includes("admin")) router.push("/");
    }
  }, []);

  return "";
};

export default SessionObserver;
