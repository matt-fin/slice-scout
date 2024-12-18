'use client';
import React, { useState } from "react";
import {
  Text,
  Box,
  Stack,
  Checkbox,
  HStack,
  Slider,
  SliderFilledTrack,
  IconButton,
  SliderThumb,
  SliderTrack,
  Button,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function Filters() {
  // State types explicitly defined
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [rating, setRating] = useState<number | null>(null); // Allow null for no rating
  const [price, setPrice] = useState<number>(1);

  const handlePriceChange = (value: number) => {
    setPrice(value);
  };

  // Reset function to clear all filters
  const resetFilters = () => {
    setIsOpened(false);
    setRating(null);
    setPrice(1); // Default price value
  };

  return (
    <Box
      width="200px"
      height="400px"
      border="2px"
      borderColor="gray.200"
      borderRadius="20px"
      padding="15px"
      bg="orange.100"
    >
      <Text fontSize="lg" fontWeight="bold">
        Filters Menu
      </Text>
      <br />
      <Stack>
        <Checkbox
          isChecked={isOpened}
          onChange={() => setIsOpened(!isOpened)}
        >
          Open Now
        </Checkbox>
      </Stack>
      <br />
      <Text>Rating</Text>
      <HStack spacing={0.5}>
        {[1, 2, 3, 4, 5].map((star) => (
          <IconButton
            key={star}
            aria-label={`Rate ${star} stars`} // Added aria-label for accessibility
            icon={
              <StarIcon color={star <= (rating || 0) ? "orange.400" : "yellow.400"} />
            }
            onClick={() => setRating(star)}
            variant="outline"
            size="sm"
          />
        ))}
      </HStack>
      <br />
      <Text>Price</Text>
      <Slider
        aria-label="Price slider"
        min={0.99}
        max={5}
        step={0.01}
        value={price}
        onChange={handlePriceChange}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <HStack justify="space-between">
        <Text>Price: ${price.toFixed(2)}</Text>
      </HStack>
      <br />
      {/* Reset Button */}
      <Button colorScheme="red" onClick={resetFilters}>
        Reset Filters
      </Button>
    </Box>
  );
}