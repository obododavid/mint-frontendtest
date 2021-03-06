import styled from 'styled-components';

export const PaymentsContainer = styled.div`
    margin-bottom: 50px;
    
    h1{
        font-size: 36px;
        font-weight: 400;
        color: #262626;
        margin-bottom: 22px;
    }

    .payments-nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;

        h3{
            font-size: 13px;
            color: #262626;
            flex: 1;

            .payment-numbers{
                color: #1875F0;
                position: relative;
                margin-right: 25px;
                margin-left: 15px;

                &:after{
                    content: '';
                    position: absolute;
                    border-left: 1px solid ;
                    border-bottom: 1px solid;
                    width: 7px;
                    height: 7px;
                    transform: rotate(-45deg);
                    top: 3px;
                    right: -12px;

                }
            }
        }

        .search-field{
            flex: 1;
            display: flex;
            align-items: center;
            padding-bottom: 5px;
            border-bottom: 0.5px solid #979797;

            img{
                margin-right: 15px;
            }

            input{
                border: none;
                font-size: 12px;
                outline: none;
                background-color: transparent;

                ::placeholder{
                    color: #979797;
                }
            }
        }

        .options-section{
            padding-left: 80px;

            &__dropdown{
                position: relative;
                display: inline-block;
                border: 1px solid #CED0DA;
                border-radius: 2px;
                padding: 10px;
                width: 150px;
                margin-left: 16px;
                cursor: pointer;

                &:after{
                    content: '';
                    position: absolute;
                    border-left: 2px solid #1875F0;
                    border-bottom: 2px solid #1875F0;
                    width: 8px;
                    height: 8px;
                    transform: rotate(-45deg);
                    top: 11px;
                    right: 12px;
                    opacity: 0.8;
                }

                &__options{
                    ${({ showDropdown }) => showDropdown && 'display: block'};
                    ${({ showDropdown }) => !showDropdown && 'display: none'};
                    position: absolute;
                    list-style: none;
                    width: 148px;
                    left: 0;
                    top: 35px;
                    border-radius: 0px 0px 6px 6px;
                    box-shadow: 0px 2px 3px 1px rgba(0,0,0,0.2);

                    li{
                        padding: 10px;
                        background-color: #ffffff;
                        cursor: pointer;

                        &:hover{
                            background-color: #F4F4F4;
                        }

                        &:last-child{
                            border-radius: 0px 0px 6px 6px;
                        }
                    }
                }
            }
        }
    }

    table{
        width: 100%;
        border-spacing: 0;

        .table-heading{
            background-color: #EAEEF0;
            color: #7F8FA4;

            td{
                font-size: 14px;
                font-weight: 300;
                text-align: left;
                padding-top: 10px;
                padding-bottom: 10px;

                &:first-child{
                    padding-left: 26px;
                }
            }
        }

        .table-row{
            background-color: #ffffff;

            td{
                padding-top: 15px;
                padding-bottom: 15px;
                color: #7F8FA4;

                &:first-child{
                    color: #414042;
                    padding-left: 26px;
                }

                &:nth-child(5){
                    width: 17%;
                }
            }

            .acronym{
                color: #ffffff;
                background-color: #7F8FA4;
                border-radius: 50%;
                height: 36px;
                width: 36px;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                margin-right: 26px;
            }

            .status{
                display: inline-block;
                border: 1px solid #CCCFD4;
                border-radius: 20px;
                width: 135px;
                padding: 10px 15px;
                font-size: 12px;

                .bullet-point{
                    width: 9px;
                    height: 9px;
                    border-radius: 50%;
                    display: inline-block;
                    margin-right: 10px;
                }
            }

            .Pending{
                color: #EBC315;

                .bullet-point{
                    background-color: #EBC315;
                }

            }

            .Reconciled{
                color: #27AE60;

                .bullet-point{
                    background-color: #27AE60;
                }

            }

            .Un-reconciled{
                color: #7F8FA4;

                .bullet-point{
                    background-color: #7F8FA4;
                }

            }

            .dropdown{
                border: 1px solid #27AE60;
                width: 27px;
                height: 27px;
                background-color: transparent;
                display: inline-block;
                position: relative;

                &:after{
                    content: '';
                    position: absolute;
                    border-left: 2px solid ;
                    border-bottom: 2px solid;
                    width: 8px;
                    height: 8px;
                    transform: rotate(-45deg);
                    top: 7px;
                    left: 8px;
                    opacity: 0.8;
                }
            }
        }

        .border-bottom{
            
            td{
                background-color: #CCCFD4;
                height: 1px;
            }

            &:last-child{
                display: none;
            }
        }
    }
`;