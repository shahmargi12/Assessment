import React, { ReactElement, useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Icons from "../../Icons";
import { Theme } from "../../theme/default";
import { StyledResumePreview } from "./ResumePreviewComponent.styled";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type ResumePreviewProps = {
  filePath: string;
  onLoadSuccess?: (numPages: number | boolean) => void;
  pageNumber: number;
  showAllPages?: boolean;
  pdfScale?: number;
  loader?: ReactElement;
  fixHeight?: boolean;
  topElement?: ReactElement;
  bottomElement?: ReactElement;
  enlargeIconVisible?: boolean;
  onEnlargeIconClick?: () => void;
};

const ResumePreviewComponent = ({
  filePath,
  onLoadSuccess,
  pageNumber,
  showAllPages,
  pdfScale,
  loader,
  fixHeight,
  topElement,
  bottomElement,
  enlargeIconVisible,
  onEnlargeIconClick,
}: ResumePreviewProps): JSX.Element => {
  const [numPages, setNumPages] = useState(null);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  useEffect(() => {
    setCurrentPageNumber(pageNumber);
  }, [pageNumber]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    if (onLoadSuccess) {
      onLoadSuccess(numPages);
    }
  }

  return (
    <StyledResumePreview fixHeight={fixHeight}>
      {numPages ? topElement : null}
      <div className="enlargeContainer">
        <Document
          loading={loader}
          file={filePath}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={() => {
            if (onLoadSuccess) {
              onLoadSuccess(false);
            }
          }}
        >
          {showAllPages ? (
            Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={pdfScale}
              />
            ))
          ) : (
            <Page
              key={`page_${currentPageNumber}`}
              pageNumber={currentPageNumber}
              scale={pdfScale}
            />
          )}
        </Document>
        {enlargeIconVisible ? (
          <div
            aria-hidden
            className="fullScreenIconContainer"
            onClick={() => {
              onEnlargeIconClick();
            }}
          >
            <div className="fullScreenIcon">
              <Icons.EnlargeIcon fill={Theme.colors.primaryBlack} />
            </div>
          </div>
        ) : null}
      </div>
      {numPages ? bottomElement : null}
    </StyledResumePreview>
  );
};

ResumePreviewComponent.defaultProps = {
  showAllPages: false,
  pdfScale: 2,
  fixHeight: false,
  enlargeIconVisible: false,
};

export default ResumePreviewComponent;
