import { Flex, Text } from "@chakra-ui/react";

import UI from "../extensions/ui";
import AnnouncementIllustrationType from "../enums/announcement-illustration-type";
import IllustrationEmptyData from "../../assets/illustration-empty-data.svg?react";
import { AppColor } from "../../theme";

const Announcement = ({ type, message, topSpace, height }) => {
  const buildIllustrationByType = () => {
    switch (type) {
      case AnnouncementIllustrationType.EMPTY:
        return <IllustrationEmptyData width="100%" />;
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
      {UI.createVerticalSpace(72)}
      <Text color={AppColor.text}>{message}</Text>
    </Flex>
  );
};

export default Announcement;
