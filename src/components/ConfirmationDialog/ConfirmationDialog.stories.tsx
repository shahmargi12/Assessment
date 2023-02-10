import React, { useState } from 'react';
import ConfirmationDialogComp from './ConfirmationDialog.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../Button';

export default {
    title: 'ConfirmDialog',
    component: ConfirmationDialogComp,
    argTypes: {},
} as ComponentMeta<typeof ConfirmationDialogComp>;

const Template: ComponentStory<typeof ConfirmationDialogComp> = (args) => {
    const [toggleDialog, setToggleDialog] = useState(false);

    const handleOpen = () => setToggleDialog(true);
    const handleClose = () => setToggleDialog(false);

    const handleConfirm = () => {
        console.log('Confirm clicked');
    };

    return (
        <>
            <Button onClick={handleOpen}>Click Me !</Button>
            {toggleDialog && (
                <ConfirmationDialogComp
                    {...args}
                    onCancel={handleClose}
                    onClose={handleClose}
                    onConfirm={handleConfirm}
                ></ConfirmationDialogComp>
            )}
        </>
    );
};

export const ConfirmationDialog: ComponentStory<typeof ConfirmationDialogComp> = Template.bind({});
ConfirmationDialog.args = {
    text: {
        title: 'Title',
        questionText: 'Are you sure? You want to delete this item?',
        cancelText: 'Cancel',
        okayText: 'Yup',
    },
    isShowCloseIcon: true,
};
