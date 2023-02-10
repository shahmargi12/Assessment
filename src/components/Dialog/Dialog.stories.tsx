import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DialogComp from './Dialog.component';
import Button from '../Button';

export default {
    title: 'Dialog',
    component: DialogComp,
    argTypes: {},
} as ComponentMeta<typeof DialogComp>;

const Template: ComponentStory<typeof DialogComp> = (args) => {
    const [toggleDialog, setToggleDialog] = useState(false);
    const headerContent = {
        title: 'Add New Enterprise',
    };

    const dialogContents = (
        <div>
            Body content
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, tenetur molestiae repudiandae,
                nihil soluta quisquam vitae dolore aperiam cum voluptatibus nam ullam? Omnis eos quam facilis provident
                quaerat accusantium corporis.
            </p>
        </div>
    );

    const onHandleClick = () => {
        setToggleDialog(false);
    };

    const onOpenDialog = () => {
        setToggleDialog(true);
    };

    return (
        <div>
            <Button onClick={onOpenDialog}>Dialog</Button>
            {toggleDialog && (
                <DialogComp
                    {...args}
                    header={headerContent}
                    content={dialogContents}
                    onClick={onHandleClick}
                    onClose={onHandleClick}
                ></DialogComp>
            )}
        </div>
    );
};

export const Dialog: ComponentStory<typeof DialogComp> = Template.bind({});
Dialog.args = {
    isShowCloseIcon: true,
};
