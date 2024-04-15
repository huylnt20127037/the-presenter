import { MdOutlineDescription } from "react-icons/md";
import { RiSpeakLine } from "react-icons/ri";
import { IoPauseCircleOutline } from "react-icons/io5";
import { BsMusicNoteList } from "react-icons/bs";
import { PiFinnTheHumanLight } from "react-icons/pi";

const SidebarAction = {
  addDialouge: "Thêm câu thoại",
  addFacialExpressionDuringSpeaking: "Chọn biểu cảm gương mặt khi nói",
  insertBreak: "Chèn khoảng nghỉ",
  importScript: "Nhập thoại từ văn bản",
  selectSpeakingAccent: "Chọn giọng nói",
  selectCharacter: "Chọn nhân vật",

  getIconComponent(sidebarAction) {
    switch (sidebarAction) {
      case SidebarAction.addDialouge:
        return <RiSpeakLine />;
      case SidebarAction.insertBreak:
        return <IoPauseCircleOutline />;
      case SidebarAction.importScript:
        return <MdOutlineDescription />;
      case SidebarAction.selectSpeakingAccent:
        return <BsMusicNoteList />;
      case SidebarAction.selectCharacter:
        return <PiFinnTheHumanLight />;
    }
  },
  getIcon(sidebarAction) {
    switch (sidebarAction) {
      case SidebarAction.addDialouge:
        return RiSpeakLine;
      case SidebarAction.insertBreak:
        return IoPauseCircleOutline;
      case SidebarAction.importScript:
        return MdOutlineDescription;
      case SidebarAction.selectSpeakingAccent:
        return BsMusicNoteList;
      case SidebarAction.selectCharacter:
        return PiFinnTheHumanLight;
    }
  },
};

export default SidebarAction;
