"use client";

import { useSelector } from "react-redux";
import MoveToTop from "../ReusableComponents/MoveToTop";
import { RootState } from "../Redux/store";

function MoveToTopBody() {
   const scrollRate = useSelector((state: RootState) => state.innovationsReducer.scrollRate);
   const scrollParams = { top: 0 };
   const scrollTrigger = 13;
   return <MoveToTop scrollRate={scrollRate} scrollParams={scrollParams} scrollTrigger={scrollTrigger} />;
}
export default MoveToTopBody;
