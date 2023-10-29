import React from "react";
import { Box, Text, Image, Heading, GridItem, Grid } from "@chakra-ui/react";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Link } from "react-router-dom";
import uuid from "react-uuid";

const CateFeature = ({ type }) => {
  const rows = [];
  for (let i = 0; i < 2; i++) {
    const row = [];
    for (let j = i * 4; j < i * 4 + 4 && j < type.length; j++) {
      row.push(
        <td key={j} style={{ textAlign: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img src={type[j].imgcatehot} alt={type[j].name} style={{ width: "60px", height: "60px", marginBottom: "10px" }} />
            <p style={{ marginTop: "0", wordWrap: "break-word" }}>{type[j].name}</p>
          </div>
        </td>
      );
    }
    rows.push(<tr key={i}>{row}</tr>);
  }
  return (
    <Box className="cateFuture">
      <Heading
        fontSize="3xl"
        display="flex"
        justifyContent="center"
        textAlign="center"
        textColor="black"
        mt="2%"
      >
        Danh mục nổi bật
      </Heading>

      <Box
        justifyContent="center"
        w="70%"
        m="auto"
        mt="6"
        cursor="pointer"
        textAlign="center"
        display="flex"
        flexWrap="wrap"
        textSizeAdjust="auto"
      >
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default CateFeature;
