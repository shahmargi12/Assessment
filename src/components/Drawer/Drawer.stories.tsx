import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DrawerComponent from './Drawer.component';
import Button from '../Button';

export default {
    title: 'Drawer',
    component: DrawerComponent,
    argTypes: {},
} as ComponentMeta<typeof DrawerComponent>;

const Template: ComponentStory<typeof DrawerComponent> = (args) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)} variant="outlined_secondary">
                {' '}
                Click to open drawer
            </Button>
            <DrawerComponent open={open} onClose={() => setOpen(false)} {...args}></DrawerComponent>
        </>
    );
};

export const Drawer: ComponentStory<typeof DrawerComponent> = Template.bind({});
Drawer.args = {
    children: (
        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi
            tempus imperdiet.
            <p>
                Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
                velit laoreet id donec ultrices.
            </p>
            Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis.
            <em>
                Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue.
            </em>
            At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac. Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt.
            <strong>
                Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
                Elementum eu facilisis sed odio morbi.
            </strong>
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
            accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
            aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
            posuere sollicitudin aliquam ultrices sagittis orci a.
        </div>
    ),
};
