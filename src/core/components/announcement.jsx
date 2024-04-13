import { Flex, Text } from "@chakra-ui/react";

import UI from "../extensions/ui";
import AnnouncementIllustrationType from "../enums/announcement-illustration-type";

import IllustrationPathNotFound from "../../assets/illustration-path-not-found.svg?react";
import IllustrationViewportNotAvailable from "../../assets/illustration-viewport-not-available.svg?react";
import IllustrationServerError from "../../assets/illustration-server-error.svg?react";
import IllustrationEmptyData from "../../assets/illustration-empty-data.svg?react";
import IllustrationNotSuitable from "../../assets/illustration-not-suitable.svg?react";

import IllustrationChecking from "../../assets/illustration-checking.svg?react";

const Announcement = ({ type, message, topSpace, height }) => {
  const buildIllustrationByType = () => {
    switch (type) {
      case AnnouncementIllustrationType.EMPTY:
        return <IllustrationEmptyData width="30%" />;
      case AnnouncementIllustrationType.PATH_NOT_FOUND:
        return <IllustrationPathNotFound width="30%" />;
      case AnnouncementIllustrationType.VIEWPORT_NOT_AVAILABLE:
        return <IllustrationViewportNotAvailable width="30%" />;
      case AnnouncementIllustrationType.SERVER_ERROR:
        return <IllustrationServerError width="30%" />;
      case AnnouncementIllustrationType.NOT_SUITABLE:
        return <IllustrationNotSuitable width="30%" />;
      case AnnouncementIllustrationType.CHECKING:
        return <IllustrationChecking width="30%" />;
    }
  };

  return (
    <Flex direction="column" align="center" height={height ?? "100%"}>
      {UI.createVerticalSpace(topSpace)}
      {buildIllustrationByType()}
      {UI.createVerticalSpace(18)}
      <Text color="neutralGray">{message}</Text>
    </Flex>
  );
};

export default Announcement;
