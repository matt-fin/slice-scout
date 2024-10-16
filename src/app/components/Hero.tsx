"use client"
import { Input } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import Head from "next/head";
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react"

export default function Hero() {
  return (
      <Container maxW={"full"} paddingTop={"90px"}>
        <Flex
            w={"full"}
            h={"80vh"}
            backgroundImage={"url(https://143892534.cdn6.editmysite.com/uploads/1/4/3/8/143892534/s332370591201761310_p201_i1_w1200.jpeg)"}
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
            align="center"
            justify="center"
        >
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
          bgColor={"rgba(255, 255, 255, 0.7)"}
          borderRadius={"30px"}
          width="60%"
          height="80%">
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}>
            Find the authentic <br />
            <Text as={"span"} color={"orange.600"}>
              99¢ Pizza
            </Text>
            &nbsp; 
            near You.
          </Heading>
          <Text color={"gray.800"} fontSize={"lg"}>
            Saving New Yorker's wallets, $1 at a time. 
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}>
            <Stack direction={"column"}
                spacing={3}
                align={"center"}>
                <SearchBar/>
            </Stack>
          </Stack>
        </Stack>
    </Flex>
    </Container>
  )
}
