import { MdOutlineDescription } from "react-icons/md";
import { RiSpeakLine } from "react-icons/ri";
import { IoPauseCircleOutline } from "react-icons/io5";
import { BsMusicNoteList } from "react-icons/bs";

const SidebarAction = {
  addDialouge: "Thêm câu thoại",
  addFacialExpressionDuringSpeaking: "Chọn biểu cảm gương mặt khi nói",
  insertBreak: "Chèn khoảng nghỉ",
  importScript: "Nhập thoại từ văn bản",
  selectSpeakingAccent: "Chọn giọng nói",
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
    }
  },
};

export default SidebarAction;
