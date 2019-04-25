import React from 'react';
// import CheckCircle from './check-circle';
// import Circle from './circle';
import Insight from './insight';
import ArrowDown from './arrow-down';
import ArrowUp from './arrow-up';
import Ascending from './ascending';
import Cancel from './cancel';
import CaretDown from './caret-down';
import CaretUp from './caret-up';
import Catalog from './catalog';
import Check from './check';
import Close from './close';
import Data from './data';
import Delete from './delete';
import Descending from './descending';
import DoubleLeft from './double-left';
import DoubleRight from './double-right';
import DoubleBottom from './double-bottom';
import Edit from './edit';
import Export from './export';
import FilterSelect from './filter-select';
import Filter from './filter';
import Home from './home';
import Logo from './logo';
import Public from './public';
import Recover from './recover';
import Refresh from './refresh';
import Right from './right';
import Left from './left';
import Bottom from './bottom';
import Top from './top';
import Search from './search';
import Setting from './setting';
import Share from './share';
import Support from './support';
import User from './user';
import Sarning from './warning';
import Inquiry from './inquiry';
import Order from './order';
import Product from './product';
import ChartLine from './chart-line';
import LogoColored from './logo-colored';
import Wechat from './wechat';
import Paypal from './paypal';
import CreditCard from './credit-card';
import Alipay from './alipay';
import Plus from './plus';
import Minus from './minus';
import Gray from './gray';
import Tips from './tips';
import Chat from './chat';
import NewChat from './new-chat';
import ChatList from './chat-list';
import ContactList from './contact-list';
import Excel from './excel';
import PDF from './PDF';
import CatalogRill from './catalog-fill';
import Expression from './expression';
import History from './history';
import Namecard from './namecard';
import Pic from './pic';
import Copy from './copy'

// category
import CategoryCar from './category-car';
import CategoryConsumer from './category-consumer';
import CategoryElectronic from './category-electronic';
import CategoryFshionApparel from './category-fshionApparel';
import CategoryFood from './category-food';
import CategoryFootwear from './category-footwear';
import CategoryFurniture from './category-furniture';
import CategoryGiftes from './category-giftes';
import CategoryHardware from './category-hardware';
import CategoryHealth from './category-health';
import CategoryHouseware from './category-houseware';
import CategoryMachinery from './category-machinery';
import CategoryMobile from './category-mobile';
import CategorySecurity from './category-security';
import CategoryService from './category-service';
import CategorySports from './category-sports';
import Converter from './converter';

// noresult
import NoResult from './noresult';
import NoresultProducts from './noresult-products';
import NoresultCompany from './noresult-company';
import NoresultBankaccount from './noresult-bankaccount';
import NoresultTradeterms from './noresult-tradeterms';
import NoresultDeliveryaddress from './noresult-deliveryaddress';
import NoresultMember from './noresult-member';

//NO-MEMBER
import Accounts from './accounts';
import API from './api';
import Cloud from './cloud';
import Verfied from './verfied';
import VerfiedGray from './verfied-gray';
import AddFill from './add-fill';
import MinusFill from './minus-fill';
import Panel from './panel';
import Pen from './pen';
import PublicEye from './public-eye';

//CHAT
import Files from './files';
import FilesExcel from './files-excel';
import FilesPdf from './files-pdf';
import FriendRequest from './friend-request';
import JoinRequest from './join-request';
import ChatRead from './chat-read';
import ChatWarning from './chat-warning';
import ChatVoice from './chat-voice';
import ChatLoading from './chat-loading';

//DETAILS
import Menu from './menu';
import Excelline from './excel-line';
import PdfLine from './pdf-line';
import Fullscreen from './fullscreen';
import Download from './download';
import Amplity from './amplify';
import Reduce from './reduce';
import RotateLeft from './rotate-left';
import RotateRight from './rotate-right';
import FlipUp from './flip-up';
import FlipLeft from './flip-left';
import Favorite from './favorite';

// CONTACT
import CustomContacts from './custom-contacts';
import Confirm from './confirm';
import Cancle from './cancle';
import Bell from './bell';
import Header1 from './header1';
import CustomerNocontact from './customer-nocontact';

//SHARE
import In from './in';
import F from './f';
import AndroidDownload from './android-download';
import AppleDownload from './apple-download';
import NoFound404 from './nofound404';
import ExportLink from './export-link';
import ExportExcel from './export-excel';
import ExportPdf from './export-pdf';

//NEW
import NewAdd from './new-add';
import NewFee from './new-fee';
import NewChats from './new-chats';
import NewInquiry from './new-inquiry';
import NewOrder from './new-order';
import NewProducts from './new-products';
import NewQuotation from './new-quotation';
import NewContacts from './new-contacts';

//PUBLIC DETAIL
import NoresultFavorites from './noresult-favorites';
import NoresultInquiries from './noresult-inquiries';
import NoresultProductoffline from './noresult-productoffline';
import NoresultQuotations from './noresult-quotations';
import NoresultVistors from './noresult-vistors';

// WORK FLOW
import WorkFlowBell from './workflow-bell';
import CompanyEmpty from './company-empty';
import WorkflowEmpty from './workflow-empty';

// TIMELINE
import Timeline1 from './timeline1';
import Timeline2 from './timeline2';
import Timeline3 from './timeline3';
import Timeline4 from './timeline4';
import TimelineCancle from './timeline-cancle';
import Link from './link';


const Svgs = {
	// 'check-circle': props =>  <CheckCircle {...props} />,
	// 'circle': props =>  <Circle {...props} />,
	'insight': props => <Insight {...props} />,
	'arrow-down': props => <ArrowDown {...props} />,
	'arrow-up': props => <ArrowUp {...props} />,
	'ascending': props => <Ascending {...props} />,
	'cancel': props => <Cancel {...props} />,
	'caret-down': props => <CaretDown {...props} />,
	'caret-up': props => <CaretUp {...props} />,
	'catalog': props => <Catalog {...props} />,
	'check': props => <Check {...props} />,
	'close': props => <Close {...props} />,
	'data': props => <Data {...props} />,
	'delete': props => <Delete {...props} />,
	'descending': props => <Descending {...props} />,
	'double-left': props => <DoubleLeft {...props} />,
	'double-right': props => <DoubleRight {...props} />,
	'double-bottom': props => <DoubleBottom {...props} />,
	'edit': props => <Edit {...props} />,
	'export': props => <Export {...props} />,
	'filter-select': props => <FilterSelect {...props} />,
	'filter': props => <Filter {...props} />,
	'home': props => <Home {...props} />,
	'public': props => <Public {...props} />,
	'recover': props => <Recover {...props} />,
	'refresh': props => <Refresh {...props} />,
	'right': props => <Right {...props} />,
	'left': props => <Left {...props} />,
	'bottom': props => <Bottom {...props} />,
	'top': props => <Top {...props} />,
	'search': props => <Search {...props} />,
	'setting': props => <Setting {...props} />,
	'share': props => <Share {...props} />,
	'support': props => <Support {...props} />,
	'user': props => <User {...props} />,
	'warning': props => <Sarning {...props} />,
	'inquiry': props => <Inquiry {...props} />,
	'order': props => <Order {...props} />,
	'product': props => <Product {...props} />,
	'chart-line': props => <ChartLine {...props} />,
	'logo': props => <Logo {...props} />,
	'logo-colored': props => <LogoColored {...props} />,
	'wechat': props => <Wechat {...props} />,
	'paypal': props => <Paypal {...props} />,
	'credit-card': props => <CreditCard {...props} />,
	'alipay': props => <Alipay {...props} />,
	'plus': props => <Plus {...props} />,
	'minus': props => <Minus {...props} />,
	'gray': props => <Gray {...props} />,
	'tips': props => <Tips {...props} />,
	'chat': props => <Chat {...props} />,
	'new-chat': props => <NewChat {...props} />,
	'chat-list': props => <ChatList {...props} />,
	'contact-list': props => <ContactList {...props} />,
	'excel': props => <Excel {...props} />,
	'PDF': props => <PDF {...props} />,
	'catalog-fill': props => <CatalogRill {...props} />,
	'converter': props => <Converter {...props} />,
	'expression': props => <Expression {...props} />,
	'history': props => <History {...props} />,
	'namecard': props => <Namecard {...props} />,
	'pic': props => <Pic {...props} />,
	'copy': props => <Copy {...props} />,
	// category
	'car': props => <CategoryCar {...props} />,
	'consumer': props => <CategoryConsumer {...props} />,
	'electronic': props => <CategoryElectronic {...props} />,
	'fshion': props => <CategoryFshionApparel {...props} />,
	'food': props => <CategoryFood {...props} />,
	'footwear': props => <CategoryFootwear {...props} />,
	'furniture': props => <CategoryFurniture {...props} />,
	'giftes': props => <CategoryGiftes {...props} />,
	'hardware': props => <CategoryHardware {...props} />,
	'health': props => <CategoryHealth {...props} />,
	'houseware': props => <CategoryHouseware {...props} />,
	'machinery': props => <CategoryMachinery {...props} />,
	'mobile': props => <CategoryMobile {...props} />,
	'security': props => <CategorySecurity {...props} />,
	'service': props => <CategoryService {...props} />,
	'sports': props => <CategorySports {...props} />,
	// noresult
	'noresult': props => <NoResult {...props} />,
	'noresult-products': props => <NoresultProducts {...props} />,
	'noresult-company': props => <NoresultCompany {...props} />,
	'noresult-bankaccount': props => <NoresultBankaccount {...props} />,
	'noresult-tradeterms': props => <NoresultTradeterms {...props} />,
	'noresult-deliveryaddress': props => <NoresultDeliveryaddress {...props} />,
	'noresult-member': props => <NoresultMember {...props} />,
	//PUBLIC DETAIL
	'noresult-favorites': props => <NoresultFavorites {...props} />,
	'noresult-inquiries': props => <NoresultInquiries {...props} />,
	'noresult-productoffline': props => <NoresultProductoffline {...props} />,
	'noresult-quotations': props => <NoresultQuotations {...props} />,
	'noresult-vistors': props => <NoresultVistors {...props} />,
	//NO-MEMBER
	'accounts': props => <Accounts {...props} />,
	'api': props => <API {...props} />,
	'cloud': props => <Cloud {...props} />,
	'verfied': props => <Verfied {...props} />,
	'unverfied': props => <VerfiedGray {...props} />,
	'add-fill': props => <AddFill {...props} />,
	'minus-fill': props => <MinusFill {...props} />,
	'panel': props => <Panel {...props} />,
	'pen': props => <Pen {...props} />,
	'public-eye': props => <PublicEye {...props} />,
	//CHAT
	'files': props => <Files {...props} />,
	'files-excel': props => <FilesExcel {...props} />,
	'files-pdf': props => <FilesPdf {...props} />,
	'friend-request': props => <FriendRequest {...props} />,
	'join-request': props => <JoinRequest {...props} />,
	'chat-read': props => <ChatRead {...props} />,
	'chat-warning': props => <ChatWarning {...props} />,
	'chat-voice': props => <ChatVoice {...props} />,
	'chat-loading': props => <ChatLoading {...props} />,
	'header1': props => <Header1 {...props} />,
	'customer-nocontact': props => <CustomerNocontact {...props} />,
	//DETAILS
	'menu': props => <Menu {...props} />,
	'excel-line': props => <Excelline {...props} />,
	'pdf-line': props => <PdfLine {...props} />,
	'fullscreen': props => <Fullscreen {...props} />,
	'download': props => <Download {...props} />,
	'amplify': props => <Amplity {...props} />,
	'reduce': props => <Reduce {...props} />,
	'rotate-right': props => <RotateRight {...props} />,
	'rotate-left': props => <RotateLeft {...props} />,
	'flip-up': props => <FlipUp {...props} />,
	'flip-left': props => <FlipLeft {...props} />,
	'favorite': props => <Favorite {...props} />,
	// CONTACT
	'custom-contacts': props => <CustomContacts {...props} />,
	'confirm': props => <Confirm {...props} />,
	'cancle': props => <Cancle {...props} />,
	'bell': props => <Bell {...props} />,
	//SHARE
	'in': props => <In {...props} />,
	'f': props => <F {...props} />,
	'android-download': props => <AndroidDownload {...props} />,
	'apple-downloa': props => <AppleDownload {...props} />,
	'nofound-404': props => <NoFound404 {...props} />,
	'export-link': props => <ExportLink {...props} />,
	'export-excel': props => <ExportExcel {...props} />,
	'export-pdf': props => <ExportPdf {...props} />,
	//NEW
	'new-add': props => <NewAdd {...props} />,
	'new-fee': props => <NewFee {...props} />,
	'new-chats': props => <NewChats {...props} />,
	'new-order': props => <NewOrder {...props} />,
	'new-inquiry': props => <NewInquiry {...props} />,
	'new-products': props => <NewProducts {...props} />,
	'new-quotation': props => <NewQuotation {...props} />,
	'new-contacts': props => <NewContacts {...props} />,
	// WORKFLOW
	'workflow-bell': props => <WorkFlowBell {...props} />,
	'company-empty': props => <CompanyEmpty {...props} />,
	'workflow-empty': props => <WorkflowEmpty {...props} />,
	// TIMELINE
	'timeline1': props => <Timeline1 {...props} />,
	'timeline2': props => <Timeline2 {...props} />,
	'timeline3': props => <Timeline3 {...props} />,
	'timeline4': props => <Timeline4 {...props} />,
	'timeline-cancle': props => <TimelineCancle {...props} />,
	'link': props => <Link {...props} />
}

export { Svgs };
