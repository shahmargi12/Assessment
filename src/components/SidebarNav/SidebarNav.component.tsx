import React, { ReactElement } from 'react';
import { StyledList, StyledSubList, StyledSidebar, StyledCount } from './SidebarNav.styled';

type tabItem = {
    label: string | ReactElement;
    value: number | string;
    pendingCount?: number;
    disabled?: boolean;
    id?: string;
};

type SidebarNavCompProps = {
    items: tabItem[];
    handleTabChange: (value: tabItem) => void;
    selectedItemIndex: number;
    width: string;
    orientation?: 'horizontal' | 'vertical';
    sideBarClassName?: string;
    listClassName?: string;
    subListClassName?: string;
    horizontalWidth?: string;
};

function SidebarNavComponent({
    items,
    handleTabChange,
    selectedItemIndex,
    width,
    orientation,
    sideBarClassName,
    listClassName,
    subListClassName,
    horizontalWidth,
}: SidebarNavCompProps): JSX.Element {
    return (
        <>
            <StyledSidebar width={width} orientation={orientation} className={sideBarClassName}>
                <StyledList
                    className={listClassName}
                    orientation={orientation}
                    classes={{ indicator: 'customInd' }}
                    value={selectedItemIndex}
                    horizontalWidth={horizontalWidth}
                >
                    {items.map((item, index) => {
                        return (
                            <StyledSubList
                                className={subListClassName}
                                orientation={orientation}
                                key={item.value}
                                isSelected={index === selectedItemIndex}
                                onClick={() => handleTabChange(item)}
                                disabled={item?.disabled}
                                label={
                                    <div>
                                        {item.label}
                                        {item.pendingCount ? <StyledCount> ({item.pendingCount})</StyledCount> : null}
                                    </div>
                                }
                                classes={{ selected: 'customSelected' }}
                            ></StyledSubList>
                        );
                    })}
                </StyledList>
            </StyledSidebar>
        </>
    );
}
SidebarNavComponent.defaultProps = {
    width: '300px',
    orientation: 'vertical',
};
export default SidebarNavComponent;
