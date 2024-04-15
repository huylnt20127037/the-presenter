import {
  FaRegFaceGrinBeam,
  FaRegFaceMeh,
  FaRegFaceSurprise,
} from "react-icons/fa6";

const FacialExpression = {
  neutral: "Bình thường",
  suprised: "Ngạc nhiên",
  happy: "Hân hoan",
};

const getIconComponent = (expression) => {
  switch (expression) {
    case FacialExpression.happy:
      return <FaRegFaceGrinBeam />;
    case FacialExpression.neutral:
      return <FaRegFaceMeh />;
    case FacialExpression.suprised:
      return <FaRegFaceSurprise />;
  }
};

export { FacialExpression, getIconComponent };
