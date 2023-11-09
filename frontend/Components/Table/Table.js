import './Table.css';
import React from 'react';
import { Button, Popconfirm, Table } from 'antd';
import propTypes from 'prop-types';
import { generateDynamicColumns } from '@/utils/tablefunction';
import Img from 'next/image';
import Pen_icon from '../../icon/pen.svg';
import View_Eye from '../../icon/eye_icon.svg';
import Delete_icon from '../../icon/trash.svg';
import { useRouter } from 'next/router';
import { staticFieldsCommonArray } from '@/utils/qhseCardData';

const CustomTable = (props) => {
    const { rowSelectionType, total, size = 'default' } = props;
    const { columns, sortingFunction } = props;

    const router = useRouter();
    const { asPath } = router;
    const qhseCardInUrl = asPath.split('/');

    const prepareRowSelection = () => {
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                props.onSelectRows && props.onSelectRows(selectedRowKeys, selectedRows);
            },
            getCheckboxProps: props.checkboxProps,
        };
        return rowSelection;
    };
    const editFunction = (event, record, onEdit) => {
        event.stopPropagation();
        onEdit && onEdit(record);
    };
    const viewFunction = (event, record, onView) => {
        event.stopPropagation();
        onView && onView(record);
    };
    const deleteFunction = (event, record, onDelete) => {
        event.stopPropagation();
        onDelete && onDelete(record);
    };
    const prepareColumns = () => {
        const { columns } = props;
        let allColumns = [...columns]; // Initialize with the provided columns
        let dynamicColumns = [];

        // Add dynamic columns if both startDate and endDate are provided
        if (props.startDate && props.endDate) {
            dynamicColumns = generateDynamicColumns(props.startDate, props.endDate);
            allColumns = [...columns, ...dynamicColumns];
        }
        const { isEditable, isDeleteable, isViewable, onView, onEdit, onDelete } = props;
        if (isEditable || isDeleteable || isViewable) {
            allColumns = [
                ...columns,
                ...dynamicColumns,
                {
                    title: 'Actions',
                    dataIndex: 'actions',
                    width: 125,
                    render: (_, record) => {
                        return (
                            <div className="table-action-btn-container">
                                {isViewable && (
                                    <Button
                                        type="link"
                                        onClick={(event) => {
                                            viewFunction(event, record, onView);
                                        }}
                                    >
                                        <Img src={View_Eye} alt="View" />
                                    </Button>
                                )}

                                {isEditable && (
                                    <Button
                                        type="link"
                                        disabled={
                                            qhseCardInUrl.includes('qhse-card') &&
                                                staticFieldsCommonArray.includes(record?.field_setting?.field_name)
                                                ? true
                                                : false
                                        }
                                        onClick={(event) => editFunction(event, record, onEdit)}
                                    >
                                        <Img
                                            className={`${qhseCardInUrl.includes('qhse-card') &&
                                                staticFieldsCommonArray.includes(record?.field_setting?.field_name)
                                                ? 'icon-customization-for-qhse-card'
                                                : ''
                                                }`}
                                            src={Pen_icon}
                                            alt="Edit"
                                        />
                                    </Button>
                                )}

                                {isDeleteable && (
                                    <Popconfirm
                                        title="Delete the task"
                                        description="Are you sure, You want to delete this column ?"
                                        onConfirm={(event) => deleteFunction(event, record, onDelete)}
                                        okText="Yes"
                                        cancelText="No"
                                        placement="topRight"
                                        disabled={
                                            qhseCardInUrl.includes('qhse-card') &&
                                                staticFieldsCommonArray.includes(record?.field_setting?.field_name)
                                                ? true
                                                : false
                                        }
                                    >
                                        <Img
                                            className={`custom-table-delete-icon ${qhseCardInUrl.includes('qhse-card') &&
                                                staticFieldsCommonArray.includes(record?.field_setting?.field_name)
                                                ? 'icon-customization-for-qhse-card'
                                                : ''
                                                }`}
                                            src={Delete_icon}
                                            alt="Delete"
                                        />
                                    </Popconfirm>
                                )}
                            </div>
                        );
                    },
                },
            ];
        }
        return allColumns;
    };

    return (
        <div className="pag" style={{ overflowX: 'auto' }}>
            <Table
                className={props.className && props.className}
                columns={prepareColumns() ? prepareColumns() : columns}
                onChange={(pagination, filter, sorter) => {
                    console.log('sorter', pagination, filter, sorter);
                    prepareRowSelection.onChange;
                    if (sortingFunction !== undefined) {
                        if (sorter.columnKey === sorter?.columnKey && sorter.order) {
                            const order = sorter.order === 'ascend' ? 'ascend' : 'descend';
                            sortingFunction(order, sorter?.columnKey);
                        }
                    }
                }}
                dataSource={props?.rows}
                rowKey={props.rowKey || 'id'}
                rowSelection={
                    rowSelectionType ? { type: rowSelectionType, ...prepareRowSelection() } : null
                }
                scroll={props.scroll}
                pagination={
                    props.pagination
                        ? props.current
                            ? {
                                showSizeChanger: false,
                                showQuickJumper: true,
                                showTotal: (total) => `Total ${total} items`,
                                total: total,
                                current: props.current,
                                position: ['bottomRight'],
                                onChange: (page) => {
                                    props.onChange(page);
                                },
                                defaultPageSize: props.pageSize ? props.pageSize : 5,
                            }
                            : {
                                showSizeChanger: total > 5 ? true : false,
                                showQuickJumper: true,
                                showTotal: (total) => `Total ${total} items`,
                                total: { total },
                                position: ['bottomRight'],
                                defaultPageSize: props.pageSize ? props.pageSize : 5,
                            }
                        : props.pagination
                }
                size={size}
                // onRow={(record) => {
                //   return {
                //     onClick: () => {
                //       if (props.isViewable && isPopup === false) {
                //         props.onView(record);
                //       }
                //     },
                //   };
                // }}
                rowClassName={() => {
                    if (props.isViewable) {
                        return 'clickable';
                    }
                }}
                footer={props.footer !== false ? () => props.footer : false}
            />
        </div>
    );
};
CustomTable.propTypes = {
    total: propTypes.number,
    rowSelectionType: propTypes.bool,
    isPopup: propTypes.bool,
    size: propTypes.string,
    onSelectRows: propTypes.func,
    checkboxProps: propTypes.func,
    columns: propTypes.arrayOf(propTypes.object),
    isEditable: propTypes.bool,
    isDeleteable: propTypes.bool,
    isViewable: propTypes.bool,
    onView: propTypes.func,
    onDelete: propTypes.func,
    onEdit: propTypes.func,
    className: propTypes.string,
    rows: propTypes.arrayOf(propTypes.object),
    rowKey: propTypes.string,
    current: propTypes.number,
    onChange: propTypes.func,
    pagination: propTypes.bool,
    pageSize: propTypes.number,
};

export default CustomTable;
