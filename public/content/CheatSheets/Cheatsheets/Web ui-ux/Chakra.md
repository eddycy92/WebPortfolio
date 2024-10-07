# Chakra UI Enhanced Cheatsheet

## 1. Flexbox (Flex)
- **Use Case**: Flexbox layouts are perfect for one-dimensional (row or column) layouts. Use `Flex` for controlling alignment and distribution of child elements.
- **Props**:
  - `direction`: Layout direction. `row` (horizontal) or `column` (vertical).
  - `justifyContent`: Horizontal alignment (`flex-start`, `center`, `space-between`, etc.).
  - `alignItems`: Vertical alignment (`flex-start`, `center`, `stretch`, etc.).
  - `wrap`: Allows wrapping when the content overflows (`wrap`, `nowrap`).
- **Pro Tip**: Use Flex for component layouts like Navbars, Footers, and Cards, where consistent alignment across different screen sizes is essential.
- **Example**:
  <Flex justifyContent="center" alignItems="center" wrap="wrap">
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </Flex>
- **Suggested Libraries**: `react-icons`: Use alongside `Flex` to add icons easily in a flex layout.

## 2. Grid / SimpleGrid
- **Use Case**: For two-dimensional layouts, use `Grid` or `SimpleGrid` to manage both rows and columns. Great for dashboards, galleries, or complex page layouts.
- **Props**:
  - `templateColumns`: Defines column structure (`"repeat(3, 1fr)"` means 3 equal columns).
  - `gap`: Space between grid items.
  - `SimpleGrid columns`: A simplified version of Grid, easier for responsive grids.
- **Pro Tip**: Use `SimpleGrid` for simpler grids with responsive column counts (`base: 1, md: 3`) and `Grid` for more complex use cases.
- **Example**:
  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
    <Box>Item 1</Box>
    <Box>Item 2</Box>
    <Box>Item 3</Box>
  </SimpleGrid>
- **Suggested Libraries**: `react-virtualized`: For handling large datasets inside grids with better performance.

## 3. Box
- **Use Case**: Base building block for any layout. Essentially a `div` that accepts all styling props.
- **Props**:
  - `p`, `m`: Padding and margin.
  - `w`, `h`: Width, height (e.g., `w="100%"`, `h="50px"`).
  - `bg`: Background color (e.g., `bg="tomato"`).
  - `border`, `borderRadius`: For border styles and rounded corners.
- **Pro Tip**: Always start with `Box` for new components and add layout styles incrementally. Combine with `position`, `zIndex` for creating layered UI elements.
- **Example**:
  <Box bg="blue.500" p={4} borderRadius="md">
    Content
  </Box>
- **Suggested Libraries**: `react-spring`: Use with `Box` for smooth animations.

## 4. Stack & VStack/HStack
- **Use Case**: Stacks simplify vertical or horizontal layouts with consistent spacing between child elements.
- **Props**:
  - `spacing`: Controls the space between items (e.g., `spacing={4}`).
  - `align`: Align items (`center`, `flex-start`).
- **Pro Tip**: Use `VStack` for vertical layouts (e.g., forms, modals) and `HStack` for horizontal layouts (e.g., buttons in a row).
- **Example**:
  <VStack spacing={4} align="center">
    <Box>Item 1</Box>
    <Box>Item 2</Box>
  </VStack>

## 5. Center
- **Use Case**: Easily centers its children both vertically and horizontally.
- **Props**: Inherits Box props.
- **Pro Tip**: Use `Center` for modals, loading spinners, or any full-page elements that need centering.
- **Example**:
  <Center h="100vh">
    <Box bg="tomato" w="200px">Centered Box</Box>
  </Center>

## 6. Text
- **Use Case**: For rendering inline text with control over typography.
- **Props**:
  - `fontSize`: Control font size (e.g., `fontSize="xl"`).
  - `fontWeight`: `normal`, `bold`, `extrabold`.
  - `color`: Text color (e.g., `color="gray.600"`).
  - `textAlign`: Control alignment (`left`, `center`, `right`, `justify`).
- **Pro Tip**: Use Chakra's responsive values to adjust typography based on screen sizes (`fontSize={{ base: 'md', md: 'lg' }}`).
- **Example**:
  <Text fontSize="lg" fontWeight="bold" color="blue.500">
    Hello, Chakra UI!
  </Text>

## 7. Heading
- **Use Case**: For defining page headings (`h1`, `h2`, etc.).
- **Props**:
  - `as`: Set the HTML tag (e.g., `as="h1"`).
  - `size`: Predefined size levels (`"xl"`, `"lg"`, `"md"`).
  - `textAlign`: Align text (`center`, `left`, `right`).
- **Pro Tip**: Use a consistent heading hierarchy (h1 for top-level, h2 for sections) for SEO and accessibility.
- **Example**:
  <Heading as="h2" size="lg" textAlign="center">
    Welcome to the Dashboard
  </Heading>

## 8. Button
- **Use Case**: Interactive buttons for submitting forms, triggering actions, etc.
- **Props**:
  - `variant`: `solid`, `outline`, `ghost`.
  - `colorScheme`: Use Chakra's color schemes (e.g., `colorScheme="blue"`).
  - `size`: `sm`, `md`, `lg`.
  - `isLoading`: Add a loading spinner to the button (`true/false`).
- **Pro Tip**: Use `colorScheme` to handle consistent button styling across hover, active, and focus states automatically.
- **Example**:
  <Button colorScheme="blue" size="md" isLoading={false}>
    Click Me
  </Button>

## 9. Image
- **Use Case**: Responsive images that scale well across devices.
- **Props**:
  - `src`: Image URL.
  - `alt`: Alternative text for accessibility.
  - `boxSize`: Define dimensions (e.g., `boxSize="200px"`).
  - `objectFit`: `cover`, `contain`, `fill` (controls how the image scales).
- **Pro Tip**: Always provide `alt` text for images to ensure accessibility and SEO best practices.
- **Example**:
  <Image src="image.png" alt="Sample Image" boxSize="200px" objectFit="cover" />

## 10. Spacer
- **Use Case**: For creating flexible space between elements in a `Flex` or `HStack`.
- **Pro Tip**: Use `Spacer` in between layout items to push elements apart without hardcoded margins or paddings.
- **Example**:
  <Flex>
    <Box>Left Item</Box>
    <Spacer />
    <Box>Right Item</Box>
  </Flex>

## 11. Divider
- **Use Case**: Separates content with a horizontal or vertical line.
- **Props**:
  - `orientation`: Set the line direction (`horizontal`, `vertical`).
- **Pro Tip**: Use `Divider` in forms, sections of pages, or between content blocks.
- **Example**:
  <Divider orientation="horizontal" />

## 12. Badge
- **Use Case**: Small labels for status, tags, or categories.
- **Props**:
  - `colorScheme`: `colorScheme="green"` (green status, like success).
  - `variant`: `solid`, `subtle`, `outline`.
- **Pro Tip**: Use `Badge` for small UI elements like labels or status indicators (e.g., `NEW`, `SALE`).
- **Example**:
  <Badge colorScheme="green">Success</Badge>

## 13. IconButton
- **Use Case**: A button that displays an icon instead of text.
- **Props**:
  - `icon`: Icon component (e.g., `<EditIcon />`).
  - `aria-label`: Required for accessibility.
  - `variant`: `solid`, `outline`, `ghost`.
- **Pro Tip**: Always provide a meaningful `aria-label` for accessibility.
- **Example**:
  <IconButton
    icon={<EditIcon />}
    aria-label="Edit"
    variant="outline"
    colorScheme="blue"
  />

---

## Alignment Cheat Sheet

- **Horizontal Alignment (Flex `justifyContent`)**:
  - `flex-start`: Align items to the left.
  - `center`: Center items horizontally.
  - `flex-end`: Align items to the right.
  - `space-between`: Spread items evenly with space between.

- **Vertical Alignment (Flex `alignItems`)**:
  - `flex-start`: Align items to the top.
  - `center`: Center items vertically.
  - `flex-end`: Align items to the bottom.
  - `stretch`: Stretch items to fill the container height.

- **Text Alignment (`textAlign`)**:
  - `left`, `center`, `right`, `justify`.

---

## Pro Tips and Best Practices:
- **Responsive Design**: Use Chakra's responsive props (`fontSize={{ base: 'sm', md: 'lg' }}`) for adjusting styles across breakpoints.
- **Theming**: Chakra’s `colorScheme` prop is perfect for applying consistent theming across components like `Button`, `Badge`, `Alert`, etc.
- **Accessibility**: Always provide `alt` text for images and meaningful `aria-labels` for interactive components (e.g., `IconButton`).
- **State Styles**: Use props like `isDisabled`, `isLoading`, `isActive` to manage conditional styles for interactive components like buttons and inputs.

## Suggested Libraries:
- **react-icons**: For using popular icon sets with Chakra's `IconButton` or `Flex`.
- **framer-motion**: For animations, can be easily integrated with Chakra's components like `Box` and `Button`.
- **react-spring**: Another powerful library for animations with Chakra UI.
- **react-virtualized**: Ideal for rendering large datasets efficiently inside grids or lists.
