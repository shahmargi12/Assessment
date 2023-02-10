import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BannerDropWithUploadComp from './BannerDropWithUpload.component';
export default {
    title: 'BannerDropWithUpload',
    component: BannerDropWithUploadComp,
    argTypes: {},
} as ComponentMeta<typeof BannerDropWithUploadComp>;

const Template: ComponentStory<typeof BannerDropWithUploadComp> = (args) => {
    const [, setBanner] = useState<FileList | null>();
    const [resetSelectedImage] = useState(true);

    const mimeType = 'image/png, image/gif, image/jpeg, image/jpg';

    const uploadFileSize = {
        size: 5000000,
        message: 'File should be 5mb',
    };

    const onChangeBanner = (event: FileList) => {
        setBanner(event);
    };

    const onDeleteBanner = () => {
        setBanner(null);
    };

    return (
        <BannerDropWithUploadComp
            bannerImgSrc={''}
            onChange={onChangeBanner}
            onDelete={onDeleteBanner}
            removeBrowseBannerImage={resetSelectedImage}
            bannerMimeType={mimeType}
            imgSize={uploadFileSize}
            isAllowUploadBanner={true}
            {...args}
        />
    );
};

export const BannerDropWithUpload: ComponentStory<typeof BannerDropWithUploadComp> = Template.bind({});

BannerDropWithUpload.args = {
    bannerLabels: {
        mainLabel: (
            <>
                Drag & drop to upload or <span>browse</span>
            </>
        ),
        infoLabel: 'PNG, JPG or JPEG (Max file size is 5MB)',
        reccomendationLabel: 'Banner image recommended size is 1220*300',
        hintLabel: 'Banner image recommended size is 1220*300',
    },
};
