import type { CSSProperties } from '@mui/material/styles/createMixins';

export const responsveStrinGenerator = (size: number, detail: CSSProperties) => {
    const responsiveObject: { [key: string]: CSSProperties } = {};
    responsiveObject[`@media (max-width: ${size}px)`] = detail;
    return responsiveObject;
}