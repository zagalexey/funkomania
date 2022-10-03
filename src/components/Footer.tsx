import React from 'react';
import styled from "styled-components";
import FooterCol from "./FooterCol";

const Title = styled.span`
  font-family: Avenir monospace;
  font-style: normal;
  font-weight: 900;
  font-size: 52px;
  line-height: 71px;
  font-variant: small-caps;
  color: #F6F6F6;
`

const ColoredTitle = styled(Title)`
  background-color: rgb(188, 251, 255);
  background-image: linear-gradient(135deg, rgba(188, 251, 255, 1) 15%, rgba(138, 192, 255, 1) 46%, rgba(146, 150, 255, 1) 78%, rgba(216, 186, 255, 0.37) 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Text = styled.p`
  font-family: TTNormsProBold monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #F6F6F6;
`

const CopyrightText = styled.p`
  font-family: TTNormsProBold monospace;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #F6F6F6;
`

const Footer = () => {
    const footerLinks = [
        {
            title: 'Account',
            links: [
                'Account',
                'Order History',
                'Pop Yourself',
                'Funko Fan Club',
                'Notification Settings'
            ]
        },
        {
            title: 'Assistance',
            links: [
                'Support Center',
                'Returns Policy',
                'Cancellation Policy',
                'Replacement Policy',
                'Accessibility Statement',
                'Terms & Conditions',
                'Privacy Policy',
                'Resellers'
            ]
        },
        {
            title: 'About Funko',
            links: [
                'About Us',
                'Blog',
                'Newsroom',
                'Funko Cares',
                'Sustainability',
                'Investors',
                'Careers',
                'Store Locator'
            ]
        },
        {
            title: 'Connect With Us',
            links: [
                'Contact Us',
                'Instagram',
                'Facebook',
            ]
        }
    ]


    return (
        <footer className={'relative h-[535px] w-[1440px] pl-[60px] bg-[#131313]'}>
            <div className={'flex'}>
                <div className={'flex flex-col mt-[45px]'}>
                    <div>
                        <Title>Funko<ColoredTitle>Mania</ColoredTitle></Title>
                        <Text>Your Funko paradise</Text>
                    </div>
                    <div className={'flex gap-[35px] mt-[37px]'}>
                        <a href="/">
                            <svg width="47" height="47" viewBox="0 0 47 47" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="23.5" cy="23.5" r="23.5" fill="#3644F8"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M18.3981 11.1992C19.7178 11.1385 20.1385 11.125 23.5 11.125C26.8615 11.125 27.2822 11.1396 28.6007 11.1992C29.9193 11.2589 30.8193 11.4693 31.6067 11.7741C32.4314 12.0858 33.1795 12.5729 33.7982 13.2029C34.4282 13.8205 34.9143 14.5675 35.2248 15.3932C35.5308 16.1808 35.74 17.0808 35.8008 18.397C35.8615 19.7189 35.875 20.1396 35.875 23.5C35.875 26.8615 35.8604 27.2822 35.8008 28.6019C35.7411 29.9181 35.5308 30.8181 35.2248 31.6056C34.9142 32.4315 34.4274 33.1797 33.7982 33.7982C33.1795 34.4282 32.4314 34.9143 31.6067 35.2248C30.8193 35.5308 29.9192 35.74 28.603 35.8008C27.2822 35.8615 26.8615 35.875 23.5 35.875C20.1385 35.875 19.7178 35.8604 18.3981 35.8008C17.0819 35.7411 16.1819 35.5308 15.3944 35.2248C14.5685 34.9142 13.8203 34.4274 13.2018 33.7982C12.5722 33.1803 12.085 32.4324 11.7741 31.6067C11.4693 30.8193 11.26 29.9192 11.1992 28.603C11.1385 27.2811 11.125 26.8604 11.125 23.5C11.125 20.1385 11.1396 19.7178 11.1992 18.3993C11.2589 17.0807 11.4693 16.1808 11.7741 15.3932C12.0854 14.5676 12.573 13.8197 13.2029 13.2018C13.8205 12.5723 14.568 12.0851 15.3932 11.7741C16.1808 11.4693 17.0808 11.26 18.397 11.1992H18.3981ZM28.5006 13.4267C27.1956 13.3671 26.8041 13.3548 23.5 13.3548C20.1959 13.3548 19.8044 13.3671 18.4994 13.4267C17.2922 13.4819 16.6375 13.6832 16.201 13.8531C15.6239 14.0781 15.211 14.3448 14.7779 14.7779C14.3673 15.1773 14.0513 15.6636 13.8531 16.201C13.6832 16.6375 13.4819 17.2922 13.4267 18.4994C13.3671 19.8044 13.3548 20.1959 13.3548 23.5C13.3548 26.8041 13.3671 27.1956 13.4267 28.5006C13.4819 29.7078 13.6832 30.3625 13.8531 30.799C14.0511 31.3356 14.3673 31.8228 14.7779 32.2221C15.1773 32.6327 15.6644 32.9489 16.201 33.1469C16.6375 33.3168 17.2922 33.5181 18.4994 33.5732C19.8044 33.6329 20.1947 33.6453 23.5 33.6453C26.8053 33.6453 27.1956 33.6329 28.5006 33.5732C29.7078 33.5181 30.3625 33.3168 30.799 33.1469C31.3761 32.9219 31.789 32.6553 32.2221 32.2221C32.6327 31.8228 32.9489 31.3356 33.1469 30.799C33.3168 30.3625 33.5181 29.7078 33.5732 28.5006C33.6329 27.1956 33.6453 26.8041 33.6453 23.5C33.6453 20.1959 33.6329 19.8044 33.5732 18.4994C33.5181 17.2922 33.3168 16.6375 33.1469 16.201C32.9219 15.6239 32.6553 15.211 32.2221 14.7779C31.8227 14.3673 31.3364 14.0514 30.799 13.8531C30.3625 13.6832 29.7078 13.4819 28.5006 13.4267ZM21.9194 27.3149C22.8021 27.6823 23.7851 27.7319 24.7003 27.4552C25.6155 27.1784 26.4063 26.5925 26.9376 25.7975C27.4688 25.0025 27.7076 24.0477 27.6131 23.0962C27.5185 22.1448 27.0966 21.2556 26.4194 20.5806C25.9876 20.1492 25.4656 19.8188 24.8909 19.6133C24.3161 19.4078 23.703 19.3323 23.0956 19.3922C22.4881 19.4521 21.9015 19.6459 21.378 19.9598C20.8545 20.2736 20.4071 20.6996 20.068 21.2071C19.7288 21.7146 19.5065 22.2909 19.4168 22.8947C19.3272 23.4985 19.3725 24.1146 19.5496 24.6987C19.7267 25.2828 20.031 25.8204 20.4408 26.2728C20.8506 26.7252 21.3556 27.0811 21.9194 27.3149ZM19.0022 19.0022C19.5929 18.4116 20.2941 17.9431 21.0658 17.6234C21.8376 17.3037 22.6647 17.1392 23.5 17.1392C24.3353 17.1392 25.1624 17.3037 25.9342 17.6234C26.7059 17.9431 27.4071 18.4116 27.9977 19.0022C28.5884 19.5929 29.0569 20.2941 29.3766 21.0658C29.6963 21.8376 29.8608 22.6647 29.8608 23.5C29.8608 24.3353 29.6963 25.1624 29.3766 25.9342C29.0569 26.7059 28.5884 27.4071 27.9977 27.9977C26.8049 29.1906 25.187 29.8608 23.5 29.8608C21.813 29.8608 20.1951 29.1906 19.0022 27.9977C17.8094 26.8049 17.1392 25.187 17.1392 23.5C17.1392 21.813 17.8094 20.1951 19.0022 19.0022ZM31.2715 18.0865C31.4179 17.9484 31.535 17.7824 31.6161 17.5982C31.6971 17.4141 31.7404 17.2155 31.7433 17.0143C31.7463 16.8131 31.7088 16.6134 31.6332 16.4269C31.5575 16.2405 31.4452 16.0711 31.303 15.9288C31.1607 15.7865 30.9913 15.6742 30.8048 15.5986C30.6184 15.5229 30.4186 15.4855 30.2175 15.4884C30.0163 15.4913 29.8177 15.5346 29.6335 15.6157C29.4494 15.6967 29.2833 15.8139 29.1453 15.9602C28.8767 16.2449 28.7297 16.623 28.7354 17.0143C28.7411 17.4056 28.8991 17.7792 29.1758 18.0559C29.4525 18.3327 29.8262 18.4906 30.2175 18.4963C30.6087 18.502 30.9868 18.355 31.2715 18.0865Z"
                                      fill="#F6F6F6"/>
                            </svg>
                        </a>
                        <a href="/">
                            <svg width="47" height="47" viewBox="0 0 47 47" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="23.5" cy="23.5" r="23.5" fill="#3644F8"/>
                                <path
                                    d="M20.3186 36V24.2693H17V20.0456H20.3186V16.4381C20.3186 13.6033 22.2789 11 26.7959 11C28.6247 11 29.9771 11.1639 29.9771 11.1639L29.8705 15.108C29.8705 15.108 28.4913 15.0955 26.9863 15.0955C25.3574 15.0955 25.0965 15.7971 25.0965 16.9616V20.0456H30L29.7866 24.2693H25.0965V36H20.3186Z"
                                    fill="#F6F6F6"/>
                            </svg>
                        </a>
                        <a href="/">
                            <svg width="47" height="47" viewBox="0 0 47 47" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="23.5" cy="23.5" r="23.5" fill="#3644F8"/>
                                <path
                                    d="M32.6211 16.6201L30.021 14.0225C29.8376 13.8382 29.6196 13.6921 29.3795 13.5924C29.1394 13.4926 28.882 13.4413 28.6221 13.4414C28.0923 13.4414 27.5942 13.6489 27.2207 14.0225L24.4229 16.8203C24.2386 17.0037 24.0925 17.2217 23.9928 17.4618C23.893 17.7019 23.8417 17.9593 23.8418 18.2192C23.8418 18.749 24.0493 19.2471 24.4229 19.6206L26.4688 21.6665C25.9899 22.7221 25.324 23.6823 24.5034 24.501C23.6849 25.3236 22.7247 25.9918 21.6689 26.4736L19.623 24.4277C19.4396 24.2435 19.2216 24.0973 18.9816 23.9976C18.7415 23.8979 18.4841 23.8466 18.2241 23.8467C17.6943 23.8467 17.1963 24.0542 16.8228 24.4277L14.0225 27.2231C13.838 27.4069 13.6917 27.6253 13.592 27.8658C13.4923 28.1063 13.4411 28.3642 13.4414 28.6245C13.4414 29.1543 13.6489 29.6523 14.0225 30.0259L16.6177 32.6211C17.2134 33.2192 18.0361 33.5586 18.8809 33.5586C19.0591 33.5586 19.23 33.5439 19.3984 33.5146C22.6895 32.9727 25.9536 31.2222 28.5879 28.5903C31.2197 25.9609 32.9678 22.6992 33.5171 19.3984C33.6831 18.3901 33.3486 17.3525 32.6211 16.6201Z"
                                    fill="#F6F6F6"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className={'grid grid-cols-4 grid-rows-1 gap-[75px] mt-[60px] ml-[60px]'}>
                    {footerLinks.map(item => (
                        <FooterCol key={item.title} title={item.title} links={item.links}/>
                    ))}
                </div>
            </div>
            <div
                className={'absolute bottom-0 left-0 right-0 w-full h-[70px] bg-[#3644F8] flex justify-center items-center'}>
                <CopyrightText className={'text-white'}>© FunkoMania. All rights reserved.</CopyrightText>
            </div>
        </footer>
    );
};

export default Footer;