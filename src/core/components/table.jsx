import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  HStack,
} from "@chakra-ui/react";
import AppContainer from "./container";
import { useTranslation } from "react-i18next";
import DateTimeExtension from "../extensions/date-time";
import UI from "../extensions/ui";

const AppTable = ({
  columnTitles,
  columnWidths,
  rowData,
  rowColor,
  onRowClick,
  onRowDoubleClick,
}) => {
  const { t } = useTranslation();

  const buildTextCell = (data) => {
    if (!data) return;

    if (Array.isArray(data)) {
      return (
        <HStack spacing="3px">
          {data.map((item, index) => (
            <AppContainer key={index}>{item}</AppContainer>
          ))}
        </HStack>
      );
    }

    if (Number.isInteger(data)) {
      return UI.formatNumberWithDots(parseInt(data));
    }

    if (DateTimeExtension.isIsoDate(data)) {
      return UI.beautifyDate(data);
    }

    if (data.includes("localization")) {
      data = data.replace("localization", "");
      return t(data);
    } else return data;
  };

  return (
    <AppContainer>
      <TableContainer width="100%">
        <Table variant="simple" layout="fixed">
          <Thead>
            <Tr>
              {columnTitles.map((columnTitle, index) => (
                <Th key={index} width={columnWidths?.at(index) ?? "100%"}>
                  {columnTitle}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {rowData?.map((row, index) => (
              <Tr
                key={index}
                _hover={{ backgroundColor: "secondary", cursor: "pointer" }}
                onClick={() => onRowClick(row.id)}
                onDoubleClick={() => onRowDoubleClick(row.id)}
                backgroundColor={rowColor ? rowColor[index] : "transparent"}
              >
                {Object.values(row).map((cell, index) => (
                  <Td key={index} overflow="hidden" whiteSpace="wrap">
                    {buildTextCell(cell)}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>

          {/* <Tfoot>
                         <Tr>
                              <Th>To convert</Th>
                              <Th>into</Th>
                              <Th isNumeric>multiply by</Th>
                         </Tr>
                    </Tfoot> */}
        </Table>
      </TableContainer>
    </AppContainer>
  );
};

export default AppTable;
