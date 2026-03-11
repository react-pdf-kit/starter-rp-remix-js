import { RPConfig } from "@react-pdf-kit/viewer";

export function AppPdfConfig(props) {
  // eslint-disable-next-line react/prop-types
  const { children } = props;

  return (
    <RPConfig licenseKey="">
      {children}
    </RPConfig>
  );
}
