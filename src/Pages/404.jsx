import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

/**
 * NotFoundPage: A React component representing the 404 error page.
 */
const NotFoundPage: React.FC = () => {
    return (
        <Box textAlign="center">
            <Image src="/path/to/404-image.png" alt="404 Error" />
            <Text fontSize="xl" fontWeight="bold" mt={4}>
                Error 404: Page Not Found
            </Text>
            <Text mt={2}>
                We're sorry, but the page you are looking for does not exist.
            </Text>
        </Box>
    );
};

export default NotFoundPage;