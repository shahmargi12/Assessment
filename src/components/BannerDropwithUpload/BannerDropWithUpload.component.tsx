import React, { useState, MouseEventHandler } from 'react';
import { getAlert } from '../../hooks';
import { Theme } from '../../theme/default';
// import ThemeIcons from '@foster/ThemeIcons';
import {
    StyledBannerDropWithUploadContainer,
    StyledFileDropWithUploadMainSection,
    StyledBannerAvatarContainer,
    StyleEditBannerBtn,
    StyleBannerButton,
} from './BannerDropWithUpload.styled';

type FormFileDropWithUploadProps = {
    bannerImgSrc: string;
    bannerLabels?: bannerLabels;
    onChange: (param: FileList) => void;
    onDelete: MouseEventHandler<HTMLButtonElement>;
    bannerMimeType: string | 'image/png, image/gif, image/jpeg, image/jpg';
    imgSize: { size: number; message: string };
    removeBrowseBannerImage?: boolean;
    isAllowUploadBanner: boolean;
    bgImgUrl?: string;
    forColor?: string;
    height?: string;
    shouldShowHint?: boolean;
    imgSizeLabel?: string;
    isMultiple?: boolean;
};

type bannerLabels = {
    mainLabel?: string | JSX.Element;
    infoLabel?: string | JSX.Element;
    reccomendationLabel?: string | JSX.Element;
    hintLabel?: string | JSX.Element;
};

const LABELS: bannerLabels = {
    mainLabel: (
        <>
            Drag & drop to upload or <span>browse</span>
        </>
    ),
    infoLabel: 'PNG, JPG or JPEG (Max file size is 5MB)',
    reccomendationLabel: 'Banner image recommended size is 1220*300',
    hintLabel: 'Banner image recommended size is 1220*300',
};

function BannerDropWithUploadComponent({
    bannerImgSrc,
    bannerLabels,
    onChange,
    onDelete,
    bannerMimeType,
    imgSize,
    removeBrowseBannerImage,
    isAllowUploadBanner,
    bgImgUrl,
    forColor,
    shouldShowHint,
    isMultiple,
    ...otherProps
}: FormFileDropWithUploadProps): JSX.Element {
    const [bannerImageUrl, setBannerImageUrl] = useState<string>();
    const [removeImage, setRemoveImage] = useState<boolean>(removeBrowseBannerImage);
    const [error, setError] = useState<string>('');
    const [bannerError, setBannerError] = useState<boolean>(false);

    const labels = { ...LABELS, ...bannerLabels };

    const onUploadBanner = (id: string) => {
        document.getElementById(id).click();
    };

    //   const entity = useSelectedEntity();

    const onBannerChange = (file: FileList, uploadType: string, event: React.ChangeEvent<HTMLInputElement>) => {
        const typeList = bannerMimeType.split(',').map((f) => f.trim());

        const isType = [...file].every((f) => typeList.includes(f.type));

        if (isType) {
            if ([...file].some((fle) => fle.size < imgSize.size)) {
                setError('');
                setBannerError(false);
                setRemoveImage(false);
                onChange(file);
                !isMultiple && setBannerImageUrl(URL.createObjectURL(file[0]));
            } else {
                getAlert('error', imgSize.message);
                setBannerError(true);
            }
        } else {
            getAlert('error', imgSize.message);
            setBannerError(true);
        }
        if (event && event.target) event.target.value = null;
    };

    const onDeleteFile = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setBannerImageUrl(null);
        onDelete(event);
    };

    return (
        <StyledFileDropWithUploadMainSection>
            <StyledBannerDropWithUploadContainer
                {...otherProps}
                allowUploadImage={isAllowUploadBanner}
                bgImg={bgImgUrl}
                onDrop={(files: FileList, event: React.ChangeEvent<HTMLInputElement>) =>
                    onBannerChange(files, 'dragFile', event)
                }
                bannerError={bannerError}
            >
                {removeImage && bannerImgSrc ? (
                    <>
                        <div className="image-circle">
                            <button type="button" onClick={onDeleteFile}>
                                {/* <ThemeIcons.DeleteBannerIcon height={32} width={32} /> */}
                            </button>
                            <img src={`${bannerImgSrc}`} alt="" />
                        </div>

                        <StyleEditBannerBtn>
                            <button type="button" onClick={() => onUploadBanner('uploadBanner')}>
                                {/* <ThemeIcons.UpdateIcon height={32} width={32} /> */}
                            </button>
                        </StyleEditBannerBtn>
                    </>
                ) : bannerImageUrl ? (
                    <>
                        <div className="image-circle">
                            <button type="button" onClick={onDeleteFile}>
                                {/* <ThemeIcons.DeleteBannerIcon height={32} width={32} /> */}
                            </button>
                            <img src={`${bannerImageUrl}`} alt="" />
                        </div>

                        <StyleEditBannerBtn>
                            <button type="button" onClick={() => onUploadBanner('uploadBanner')}>
                                {/* <ThemeIcons.UpdateIcon height={32} width={32} /> */}
                            </button>
                        </StyleEditBannerBtn>
                    </>
                ) : (
                    <>
                        <StyleBannerButton>
                            <StyledBannerAvatarContainer fColor={forColor}>
                                {/* <ThemeIcons.UploadCloudIcon
                  height={35}
                  width={35}
                  fill1={Theme.colors.primaryBlack30}
                  fill2={Theme.colors.primaryBlack}
                /> */}
                            </StyledBannerAvatarContainer>
                            <button type="button" onClick={() => onUploadBanner('uploadBanner')}>
                                {labels.mainLabel && <p>{labels.mainLabel}</p>}
                                {labels.infoLabel && (
                                    <p
                                        className={
                                            bannerError ? 'bannerError fileUploadAllowMsg' : 'fileUploadAllowMsg'
                                        }
                                    >
                                        {labels.infoLabel}
                                    </p>
                                )}
                                {/* {entity?.entityName === "Student" &&
                  labels.reccomendationLabel && (
                    <p className="studentHintPara">
                      {labels.reccomendationLabel}
                    </p>
                  )} */}
                            </button>
                        </StyleBannerButton>
                    </>
                )}

                <input
                    type="file"
                    onChange={(event) => onBannerChange(event.target.files, 'uploadFile', event)}
                    id="uploadBanner"
                    hidden
                    accept={bannerMimeType}
                    multiple={isMultiple}
                />
            </StyledBannerDropWithUploadContainer>

            {shouldShowHint && labels.hintLabel && <p className="hintPara">{labels.hintLabel}</p>}

            {error && <small>{error}</small>}
        </StyledFileDropWithUploadMainSection>
    );
}

BannerDropWithUploadComponent.defaultProps = {
    bannerImgSrc: '',
    removeBrowseBannerImage: true,
    isAllowUploadBanner: true,
    bgImgUrl: '',
    shouldShowHint: true,
};

export default BannerDropWithUploadComponent;
