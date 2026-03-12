import {
  RPProvider,
  RPLayout,
  RPPages,
} from "@react-pdf-kit/viewer";

export const AppPdfViewer = (props) => {
  // eslint-disable-next-line react/prop-types
  const { showToolbar = true, providerProps, defaultLayoutProps } = props;

  return (
    <RPProvider
      src="https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf"
      {...providerProps}
    >
      <RPLayout toolbar={showToolbar} {...defaultLayoutProps}>
        <RPPages />
      </RPLayout>
    </RPProvider>
  );
};
