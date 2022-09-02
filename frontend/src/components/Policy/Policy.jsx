import React from "react";
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";
import { Fragment, useState } from "react";
import "./policy.css";
import { policy } from "../../assets/main";

// const accordionData = [
// 	{
// 		id: 1,
// 		title: "Policy",
// 		content: ` IMMEDI8 SERVICES LTD. TRADING AS I-MONEY, IMMEDI8 FINANCE & IMMEDI8 MONEY (“IMMEDI8MONEY.COM”)

// WE ARE AN AUTHORISED PAYMENT INSTITUTION (API) BY THE FINANCIAL CONDUCT AUTHORITY (FCA) UNDER THE PAYMENT SERVICES REGULATION 2009 – PSD 584027 FOR THE PROVISSION OF PAYMENT SERVICES.

// WE ARE ALSO AN AUTHORISED AND REGULATED BUSINESS WITH HER MAJESTY REVENUE AND CUSTOMS (HMRC)

// THIS IS OUR POLICY TO COMPLY WITH ALL GOVERNMENT REGULATIONS AT ALL TIMES `,
// 	},
// ];

export const Policy = () => {
	const [open, setOpen] = useState(0);

	const handleOpen = value => {
		setOpen(open === value ? 0 : value);
	};

	return (
		<>
			<div className="container mx-auto p-16 ">
				<div className="flex">
					<div className="flex-1 w-full">
						<p
							className="text-xl text-blue-900 font-extrabold mb-10"
							data-aos="fade-up"
							data-aos-duration="3000">
							Our <br />
							<span
								className="text-red-700 text-3xl"
								data-aos="fade-right"
								data-aos-duration="3000">
								Policy
							</span>
						</p>

						<Accordion
							className="mb-2"
							open={open === 1}
							onClick={() => handleOpen(1)}>
							<AccordionHeader className="bg-slate-200 p-3 rounded-xl text-gray-800">
								Our Policy
								<hr />
							</AccordionHeader>
							<AccordionBody className="p-5 text-justify text-l mt-2 subpixel-antialiased">
								IMMEDI8 SERVICES LTD. TRADING AS I-MONEY,
								IMMEDI8 FINANCE & IMMEDI8 MONEY
								(“IMMEDI8MONEY.COM”) WE ARE AN AUTHORISED
								PAYMENT INSTITUTION (API) BY THE FINANCIAL
								CONDUCT AUTHORITY (FCA) UNDER THE PAYMENT
								SERVICES REGULATION 2009 – PSD 584027 FOR THE
								PROVISSION OF PAYMENT SERVICES. WE ARE ALSO AN
								AUTHORISED AND REGULATED BUSINESS WITH HER
								MAJESTY REVENUE AND CUSTOMS (HMRC). THIS IS OUR
								POLICY TO COMPLY WITH ALL GOVERNMENT REGULATIONS
								AT ALL TIMES.
							</AccordionBody>
						</Accordion>
						<Accordion
							className="mb-2"
							open={open === 2}
							onClick={() => handleOpen(2)}>
							<AccordionHeader className="bg-slate-200 p-3 rounded-xl text-gray-800">
								AML & Compliance
							</AccordionHeader>
							<AccordionBody className="leading-relaxed p-5 text-justify text-l mt-2 subpixel-antialiased">
								<div className="scroller">
									IMMEDI8 SERVICES LTD. TRADING AS I-MONEY,
									IMMEDI8 FINANCE & IMMEDI8 MONEY
									(“IMMEDI8MONEY.COM”) WE ARE AN AUTHORISED
									PAYMENT INSTITUTION (API) BY THE FINANCIAL
									CONDUCT AUTHORITY (FCA) UNDER THE PAYMENT
									SERVICES REGULATION 2009 – PSD 584027 FOR
									THE PROVISSION OF PAYMENT SERVICES. WE ARE
									ALSO AN AUTHORISED AND REGULATED BUSINESS
									WITH HER MAJESTY REVENUE AND CUSTOMS (HMRC).
									THIS IS OUR POLICY TO COMPLY WITH ALL
									GOVERNMENT REGULATIONS AT ALL TIMES. AS A
									MONEY SERVICE BUSINESS, WE ARE SUBJECT TO
									THE FOLLOWING REGULATIONS: REPORTING We are
									required to report the following types of
									transactions to the authorities: Suspicious
									Activity (SAR) RECORD KEEPING We are
									required to keep all client, transaction and
									corporate records for a minimum of 5 years.
									ASCERTAINING IDENTITY We are required to
									collect and verify your identification for
									remittances of £1,000 and more. THIRD PARTY
									DETERMINATION If you are conducting a
									transaction on someone else’s behalf, we are
									required to obtain information on the both
									parties: you and the person on whose behalf
									you are conducting the transaction.
									COMPLIANCE PROGRAM We are required to
									maintain a compliance program containing
									adequate policies and procedures in
									accordance with the applicable regulations.
									For more information, refer to FCA and FATF
									websites: http://www.fca.org.uk/
									http://www.fatf-gafi.org/ ADDITIONAL
									MEASURES WE TAKE TO PREVENT MONEY LAUNDERING
									AND TERRORIST FINANCING. WE TAKE THE
									FOLLOWING ADDITIONAL MEASURES TO PREVENT
									MONEY LAUNDERING AND TERRORIST FINANCING:
									SCANNING AGAINST THE HM TREASURY WATCH LIST
									It is our policy to check each transaction
									against the HM Treasury watch list. Any
									matched names are subject to further review
									by the compliance officer. TRANSACTION
									MONITORING We have adequate controls
									pertaining to the transaction activity at
									several instances of the life cycle of a
									transaction. These controls include: Client
									Profiling. Risk Assessment. Client
									Identification Controls & Validations.
									Transaction Aggregation Thresholds.
									Government Reporting Controls & Validations.
									Possible Structuring Reporting. Enhanced Due
									Diligence Reporting.
								</div>
							</AccordionBody>
						</Accordion>
						<Accordion
							className="mb-2"
							open={open === 3}
							onClick={() => handleOpen(3)}>
							<AccordionHeader className="bg-slate-200 p-3 rounded-xl text-gray-800">
								Terms & Conditions
							</AccordionHeader>
							<AccordionBody className="p-5 text-justify">
								<div className="scroller leading-relaxed">
									<h4>
										IMMEDI8 SERVICES LTD. TRADING AS
										I-MONEY, IMMEDI8 FINANCE & IMMEDI8 MONEY
										(“IMMEDI8MONEY.COM”)
									</h4>
									<br />
									<h4>
										AUTHORIZED FINANCIAL SERVICE IS SUBJECT
										TO THE FOLLOWING TERMS AND CONDITIONS:
									</h4>
									<br />
									<p>
										In the event there is any inconsistency
										between the English version of our web
										site and any other language version, the
										English version shall be binding.
									</p>
									<br />
									<p>
										An Immedi8 Services Ltd.
										(“immedi8money.com”) Money Transfer
										customer (the “Sender”) may send a Money
										Transfer to a designated receiver (the
										“Receiver”) anywhere in the world where
										Immedi8 Services Ltd.
										(“immedi8money.com”) offers its services
										over the Internet (the “Service”) using
										Sofort banking or any other electronic
										payment method (“Payment Method”). Money
										Transfers will normally be paid to the
										Receiver in cash or bank deposit. Money
										Transfers are available for pick up by
										the Receiver promptly after validation
										of Sender information which may take up
										to 24 hours, on a “Will Call” basis, at
										Immedi8 Services Ltd.
										(“immedi8money.com”) agent locations in
										the destination country. Certain money
										transfer services, transfers that exceed
										certain principal amounts, and/or
										transfers to certain destinations may
										take longer or be subject to additional
										restrictions.
									</p>
									<br />
									<p>
										For certain international destinations,
										a Test Question is required to be
										provided for some or all Money Transfers
										to that destination, and in those
										destinations, the Receiver may be
										required to provide either proper
										identification or the correct answer to
										the Test Question, or both, to receive
										payment. Please contact Immedi8 Services
										Ltd. (“immedi8money.com”) at the
										Customer Service telephone number listed
										below for current information regarding
										the availability of Test Questions for
										your selected destination. Immedi8
										Services Ltd. (“immedi8money.com”)
										reserves the right to limit the
										principal amount of a Money Transfer, or
										to decline to accept or pay any Money
										Transfer that it or its agents determine
										in their sole discretion violates any
										applicable law or Immedi8 Services Ltd.
									</p>
									<br />
									<h4>(“immedi8money.com”) policy.</h4>
									<br />
									<p>
										Please contact Immedi8 Services Ltd.
										(“immedi8money.com”) at the Customer
										Service telephone number listed below
										for current information regarding the
										conditions applicable to the service you
										have selected or your expected payment
										location. <br /> <br /> When required by
										applicable law, Money Transfers sent or
										received in The United Kingdom will be
										reported to federal, provincial, local
										and/or foreign authorities. You will be
										required to provide Immedi8 Services
										Ltd. (“immedi8money.com”) with certain
										information to allow us, among other
										things: to verify your identity; to
										receive appropriate Payment Method
										authorization; and/or to complete the
										transaction. Please refer to Immedi8
										Services Ltd. (“immedi8money.com”)’s
										Online Privacy Statement for information
										concerning Immedi8 Services Ltd.
										(“immedi8money.com”) use of this and
										other personal information.
									</p>
									<br />
									<h3 className="font-extrabold">
										FEES, PAYMENT AND CURRENCY EXCHANGE
									</h3>
									<br />
									<p>
										Transfer Fees. In consideration for the
										use of the Service, you agree to pay to
										Immedi8 Services Ltd.
										(“immedi8money.com”) a fee for each
										Money Transfer initiated by you at the
										applicable rate then in effect (the
										“Transfer Fee”). The applicable Transfer
										Fee for your transaction will be
										provided to you prior to your final
										authorization of the transaction, in
										addition to any applicable fees for
										additional services.
									</p>{" "}
									<br />
									<h3 className="font-extrabold">
										CURRENCY EXCHANGE
									</h3>
									<br />
									<p>
										All payments will be made in the
										currency of the destination country
										(except in a limited number of instances
										where payment can be made in the sending
										currency). In addition to the transfer
										fees applicable to this transaction, a
										currency exchange rate will be applied.
										British Pound is converted to foreign
										currency at an exchange rate set by
										Immedi8 Services Ltd.
										(“immedi8money.com”). Any difference
										between the rate given to customers and
										the rate received by Immedi8 Services
										Ltd. (“immedi8money.com”) will be kept
										by Immedi8 Services Ltd.
										(“immedi8money.com”) (and, in some
										cases, its international agents) in
										addition to the Transfer Fees. Any
										refund in the event of non-payment will
										be made at the applicable exchange rate
										as described above in effect at the time
										of reconversion into British Pound. For
										information concerning the current
										currency exchange rates provided by
										Immedi8 Services Ltd.
										(“immedi8money.com”) to its customers
										call +44 0208 475 0759.
									</p>
									<br />
									<h3 className="font-extrabold">PAYMENTS</h3>
									<br />
									<p>
										Transfer fees and the principal amount
										are due and payable before Immedi8
										Services Ltd. (“immedi8money.com”)
										processes the transaction. You must pay
										for the Service with your Payment
										Method. If Immedi8 Services Ltd.
										(“immedi8money.com”) does not receive
										authorization from the Payment Method
										issuer, the transaction will be not be
										processed and funds will not be
										transmitted to the Receiver. Immedi8
										Services Ltd. (“immedi8money.com”)
										assumes no liability for damages
										resulting from or arising out of
										non-payment of the Money Transfer by
										reason of non-receipt of authorization
										from the Payment Method issuer. Each
										time you use the Service you agree that
										Immedi8 Services Ltd.
										(“immedi8money.com”) is authorized to
										charge your designated Payment Method
										account for the principal amount, the
										transfer fee and any other applicable
										fees. (Your agreement with your Payment
										Method issuer governs use of your
										Payment Method, and you must refer to
										that agreement to ascertain your rights
										and liabilities as a user of your
										Payment Method, which may include a
										“cash advance” fee.)
									</p>
									<br />
									<h3 className="font-extrabold">REFUNDS</h3>
									<br />
									<p>
										REFUNDS OF PRINCIPAL AMOUNT and
										cancellation of the Money Transfer will
										be made upon written request of the
										Sender if payment to the Receiver has
										not yet been made at the time the
										request is processed by Immedi8 Services
										Ltd. (“immedi8money.com”). Refunds will
										be made within 45 days of receipt of a
										valid written request from the Sender.
									</p>
									<br />
									<p>
										REFUNDS OF FEES will be made upon
										written request of the Sender if the
										Money Transfer is not available to the
										Receiver within the time specified by
										Immedi8 Services Ltd.
										(“immedi8money.com”) for the selected
										service, subject to the business hours
										of the location selected by the Receiver
										for payment and other special
										conditions. Refunds will be made within
										45 days of receipt of a valid written
										request from the Sender.
									</p>
									<br />
									<h3 className="font-extrabold">
										SPECIAL SERVICES
									</h3>
									<br />
									<p>
										TELEPHONE NOTIFICATION to the Receiver
										that the Money Transfer is available for
										pick up is offered in The United Kingdom
										and certain international destinations.
										MESSENGER DELIVERY of a Money Transfer
										cheque is available to selected
										international destinations. SUPPLEMENTAL
										MESSAGES may be included with domestic
										and most international Money Transfers.
									</p>
									<br />
									<h3 className="font-extrabold">
										ADMINISTRATION CHARGE
									</h3>
									<br />
									<p>
										If a Money Transfer is not picked up by
										the Receiver or is not cancelled by the
										Sender prior to pick up within one (1)
										year of the date it was sent, there will
										be a non-refundable administration
										charge where permitted by law. The
										administration charge will be deducted
										from the principal amount of the Money
										Transfer. The administration charge is
										ONE (1) British Pound per month from the
										date the Money Transfer was sent, but
										not more than Twenty Five (25) British
										Pounds.
									</p>
									<br />
									<h3 className="font-extrabold">
										RESOLUTION OF DISPUTES
									</h3>
									<br />
									<p>
										IMMEDI8 SERVICES LTD. SHALL EXERCISE ITS
										BEST EFFORTS TO RESOLVE ANY DISPUTES
										THAT ARISE BY OUR CUSTOMERS.
									</p>
									<br />
									<p>
										THE FOLLOWING ESCALATION PROCEDURES WILL
										BE USED TO RESOLVE ANY ISSUES AND
										DISPUTES:
									</p>
									<br />
									<p>Step 1 – Contact Customer Service</p>
									<p>
										Step 2 – Contact the Management Office
									</p>
									<p>
										Step 3 – Contact the Office of the
										President
									</p>
									<br />
									<p>
										If you remain unsatisfied with the
										resolution of your complaint after
										following the above escalation process,
									</p>
									<br />
									<p className="text-center">
										FCA, HMRC, Consumer Direct, Office of
										Fair Trading or Financial Ombudsman
										Service (FOS) may be able to help you.
									</p>
								</div>
							</AccordionBody>
						</Accordion>

						<Accordion
							className="mb-2"
							open={open === 4}
							onClick={() => handleOpen(4)}>
							<AccordionHeader className="bg-slate-200 p-3 rounded-xl text-gray-800">
								Dispute Resolutions
							</AccordionHeader>
							<AccordionBody className="text-justify p-5">
								<div className="scroller leading-relaxed">
									<p>
										IMMEDI8 SERVICES LTD. TRADING AS
										I-MONEY, IMMEDI8 FINANCE & IMMEDI8 MONEY
										(“IMMEDI8MONEY.COM”)
									</p>
									<br />
									<p>
										WE ARE AN AUTHORISED PAYMENT INSTITUTION
										(PI) BY THE FINANCIAL CONDUCT AUTHORITY
										(FCA) UNDER THE PAYMENT SERVICES
										REGULATION 2009 – PSD 584027 FOR THE
										PROVISION OF PAYMENT SERVICES.
									</p>
									<br />
									<p>
										WE ARE ALSO AN AUTHORISED AND REGULATED
										BUSINESS WITH THE HER MAJESTY REVENUE
										AND CUSTOMS (HMRC).
									</p>
									<br />
									<p>
										THIS IS OUR POLICY TO COMPLY WITH ALL
										GOVERNMENT REGULATIONS AT ALL TIMES.
									</p>
									<br />
									<p>
										IMMEDI8 SERVICES LTD. SHALL EXERCISE ITS
										BEST EFFORTS TO RESOLVE ANY DISPUTES
										THAT ARISE BY OUR CUSTOMERS. THE
										FOLLOWING ESCALATION PROCEDURES WILL BE
										USED TO RESOLVE ANY ISSUES AND DISPUTES:
									</p>
									<br />
									<p>Step 1 – Contact Customer Service</p>
									<p>
										Step 2 – Contact the Management Office
									</p>
									<p>
										Step 3 – Contact the Chief Executive
										Officer
									</p>
									<br />
									<p>
										If you remain unsatisfied with the
										resolution of your complaint after
										following the above escalation process,
										FCA, HMRC, Consumer Direct, Office of
										Fair Trading or Financial Ombudsman
										Service (FOS) may be able to help you.
									</p>
									<br />
									<p>
										You can contact the Financial Ombudsman
										Service at:
									</p>
									<br />
									<p>
										The Financial Ombudsman Service South{" "}
										<br />
										Quay Plaza, 183 Marsh Wall London E14
										9SR <br /> Phone: 08000234567 or
										03001239123 <br /> E-mail:
										complaintinfo@financial-ombudsman.org.uk{" "}
										<br />
										Website: www.financial-ombudsman.org.uk
									</p>
									<br />
									<p>
										Financial Ombudsman Service will only
										deal with complaints about problems that
										occurred within the UK or acts and
										omission by the FCA authorised payment
										service provider within the EEA. If you
										have a complaint about problems that
										occurred outside the UK and/or acts and
										omission by a non-FSA authorised entity,
										you may refer your complaint to the
										local ombudsman where the problem
										occurred and follow the local out of
										court and redress procedures to register
										your complaint.
									</p>
									<br />
									<p>
										Any dispute or claim arising from or
										relating to a Money Transfer conducted
										by us that involves a claim by Sender
										for less than $10,000, exclusive of
										interest, arbitration fees and costs,
										can be settled by arbitration
										administered by the UK Advisory,
										Conciliation & Arbitration Service
										(“ACAS”) under its Arbitration Rules for
										the Resolution of Consumer Related
										Disputes.
									</p>
									<br />
									<p>
										Any other dispute or claim arising from
										or relating to this Money Transfer shall
										be settled by arbitration administered
										by the ACAS under its Commercial
										Arbitration Rules, with such arbitration
										to be held in the most populous city in
										the province from which the Money
										Transfer was sent, or in such other
										location as the parties may mutually
										agree. Each party shall bear its own
										lawyer, expert and witness fees, which
										shall not be considered costs of
										arbitration. Judgment on any award
										rendered by the arbitrator may be
										entered in and enforced by any court
										having jurisdiction thereof.
									</p>
									<br />
									<p>
										The parties agree that neither of them
										shall have the right to participate as a
										representative or a member of any class
										of claimants pertaining to any claim
										subject to arbitration under this
										paragraph and that claims of third
										parties shall not be joined in any
										arbitration between the parties. If any
										portion of this paragraph is deemed
										invalid or unenforceable, it shall not
										invalidate the remaining portions of
										this paragraph.
									</p>
									<br />
									<p>
										THE PARTIES ACKNOWLEDGE AND AGREE THAT,
										EXCEPT AS EXPRESSLY PROVIDED IN THIS
										PARAGRAPH, THEY ARE WAIVING ALL RIGHTS
										TO A TRIAL BY COURT OR JURY AS A MEANS
										OF RESOLVING ANY DISPUTES ARISING OUT OF
										OR RELATING TO THIS MONEY TRANSFER.
									</p>
								</div>
							</AccordionBody>
						</Accordion>

						<Accordion
							className="mb-2"
							open={open === 5}
							onClick={() => handleOpen(5)}>
							<AccordionHeader className="bg-slate-200 p-3 rounded-xl text-gray-800">
								Privacy Statement
							</AccordionHeader>
							<AccordionBody className="text-justify p-5 leading-relaxed">
								<div className="scroller">
									<p>
										Privacy Statement Effective Date:
										September 1, 2013 This Privacy Statement
										describes how IIMMEDI8 SERVICES LTD.
										TRADING AS IMMEDI8 FINANCE AND IMMEDI8
										MONEY (“immedi8money.com”, “we”, “us”
										and “our”) collects, uses and discloses
										your personal information. “Personal
										information” is information about an
										identifiable individual, as more
										particularly defined or limited under
										applicable The United States privacy
										legislation. This Privacy Statement
										applies to our collection, use and
										disclosure of personal information about
										our consumer and business customers and
										other individuals we deal with in The
										United States (“you” and “your”). This
										Privacy Statement does not apply to
										information about our employees or to
										information that is not personal
										information.
									</p>
									<br />

									<h3 className="font-extrabold">
										INFORMATION WE COLLECT{" "}
									</h3>
									<br />
									<p>
										“immedi8money.com” collects personal
										information about you from a variety of
										sources in the course of providing money
										transfer and payment services and
										related products and services we
										provide. Personal information we collect
										and the sources of such personal
										information include the following
									</p>
									<br />
									<p>
										We collect personal information when you
										ask us to send or receive money or to
										provide other goods or services,
										provided by telephone, online at our Web
										site, through paper-based forms or at
										Our agent locations. This personal
										information may include identities and
										contact information of senders and
										recipients of money transfers or
										payments, credit card, banking or other
										billing information, birth dates and
										other personal identifiers, “out of
										wallet” questions used to verify your
										identity for security and fraud
										prevention purposes, identification
										number and amounts paid or transferred.
									</p>
									<br />
									<p>
										We collect personal information when you
										submit personal information on
										applications or other forms to us or our
										affiliates, including in connection with
										sending and receiving money transfers,
										through your enrolment and participation
										in loyalty programs and when you provide
										additional information we may reasonably
										request for fraud prevention purpose.
									</p>
									<br />
									<p>
										We collect information about your
										transactions with us, including
										transaction history, such as frequency
										of use and amounts transferred. In
										connection with identify verification,
										fraud prevention and similar security
										purposes, we collect and/or confirm
										certain identity-related information,
										financial background and similar
										information through third parties
										sources such as our business customers,
										government agencies and consumer
										reporting agencies;
									</p>
									<br />
									<p>
										We collect information regarding your
										online activity as described in the
										section below titled “INTERNET
										TECHNOLOGY.” We may collect personal
										information otherwise with your consent
										or as permitted or required by law.
									</p>
									<br />
									<h3 className="font-extrabold">
										HOW WE USE PERSONAL INFORMATION
									</h3>
									<br />
									<p>
										“immedi8money.com” generally uses
										personal information in the course of
										its money transfer, payment and related
										services and products for the following
										purposes:
									</p>
									<br />
									<p>
										Authorizing and processing your
										transactions, including effecting and
										administering money transfers and
										payments and ensuring proper payment to
										the designated recipient of funds.
									</p>
									<br />
									<p>
										Collecting amounts owing to us, and
										otherwise enforcing and collecting on
										your accounts or agreements with us.
									</p>
									<br />
									<p>
										Meeting legal, regulatory, risk
										management, fraud prevention and
										security requirements, which may include
										(among other measures) verifying the
										identity of the sender and recipient of
										funds and checking identities against
										money laundering, terrorist financing or
										similar watch lists established by
										regulatory agencies or similar bodies in
										The United States, the United States or
										in other countries. For identity
										verification purposes, senders and
										recipients of money transfers or
										payments may be required to produce
										valid identification [or consent to
										verification by other means] before
										releasing funds.
									</p>
									<br />
									<p>
										For marketing and promotional purposes,
										unless you “opt out” or withdraw consent
										to this purpose, as described in the
										section entitled “Offers, Promotions and
										Opting Out” below.
									</p>
									<br />
									<p>
										Maintaining business and transaction
										records for reasonable periods, and
										generally managing and administering our
										business.
									</p>
									<br />
									<p>
										In connection with certain business
										transactions relating to
										“immedi8money.com”, its business or
										assets, as further described in the
										section entitled “Information We
										Disclose” below. Meeting insurance,
										audit and processing requirements.
										Otherwise with your consent or as
										permitted or required by law.
									</p>

									<br />
									<h3 className="font-extrabold">
										INFORMATION WE DISCLOSE{" "}
									</h3>
									<br />
									<p>
										We may disclose your personal
										information to our affiliates and to
										unaffiliated third parties in connection
										with the purposes described in this
										Privacy Statement as follows:
									</p>
									<br />
									<p>
										To Provide Services. In order to process
										and complete requested money transfers
										and payments, we may disclose personal
										information to the recipient of a money
										transfer or payment, to our local
										affiliates at the sender’s or receiver’s
										location, as applicable, to authorized
										agents (both at the sender’s and the
										recipient’s location), and, if
										applicable, the recipient and any
										intermediary banks or other financial
										institutions or financial services
										companies involved in the transaction or
										our services.
									</p>
									<br />
									<p>
										Business Partners. Some of our services
										or programs that you participate in are
										provided jointly with other third party
										business partners, and certain personal
										information may be disclosed to these
										third party businesses for the purpose
										of administering the service or program.
									</p>
									<br />
									<p>
										Marketing Purposes. We may disclose
										personal information to third parties
										for marketing and promotional purposes,
										unless you “opt out” or withdraw consent
										to this disclosure, as described in the
										section entitled “Offers, Promotions and
										Opting Out” below.
									</p>
									<br />
									<p>
										Service Providers. ”immedi8money.com”
										may transfer personal information to
										outside agents or service providers
										(including affiliates of
										“immedi8money.com” acting in this
										capacity) that perform services on our
										behalf, for example marketing,
										information technology and/or data
										hosting or processing services. Some of
										these service providers or affiliates
										may be located outside of in the United
										States, and your personal information
										may be collected, used, disclosed,
										stored and processed in the United
										States or elsewhere outside of The
										United States for the purposes described
										in this Privacy Statement.{" "}
									</p>
									<br />
									<p>
										We take reasonable measures to ensure
										that personal information that may be
										processed by these service providers on
										our behalf is protected and not used or
										disclosed for purposes other than as
										directed by us, subject to legal
										requirements in the United States and
										other foreign countries applicable to
										“immedi8money.com” affiliates, agents
										and service providers, for example
										lawful requirements to disclose personal
										information to government authorities in
										those countries.
									</p>
									<br />
									<p>
										Business Transactions. Your personal
										information may be used by
										“immedi8money.com” and disclosed to
										parties connected with the contemplated
										or actual financing, securitization,
										insuring, sale, assignment or other
										disposal of all or part of our business
										or assets (including, for example, your
										service account with us), for purposes
										related to the evaluation and
										performance of these transactions,
										including:
									</p>
									<br />
									<p>
										permitting such parties to evaluate and
										determine whether to proceed or continue
										with the transaction, and fulfilling
										reporting, inspection or audit
										requirements or obligations to such
										parties. Successors and assigns of
										“immedi8money.com” and/or its business
										or assets may use and disclose your
										personal information for similar
										purposes as described in this Privacy
										Statement.
									</p>
									<br />
									<p>
										Legal, Regulatory, etc. Legal,
										Regulatory, etc. “immedi8money.com” may
										disclose your personal information as
										necessary to meet legal, regulatory,
										insurance, audit, and security
										requirements, and as otherwise with your
										consent or as permitted or required by
										law (including as required by applicable
										the United States and foreign laws).
										This may include lawful requirements to
										disclose personal information to
										government authorities in the United
										States and in foreign countries, for
										example disclosures in compliance with
										suspicious activity reporting
										requirements under anti-terrorism,
										anti-money laundering and similar laws
										and regulations in the United States or
										in foreign countries.
									</p>
									<br />
									<h3 className="font-extrabold">
										OFFERS, PROMOTIONS AND OPTING OUT
									</h3>
									<p>
										“immedi8money.com” may use your contact
										details and information about your use
										of our services (e.g. frequency, value
										of money transfer, or destination
										country) for marketing and solicitation
										purposes to send you offers, promotions
										or information about additional products
										and services of “immedi8money.com” and
										our affiliates that may be of interest
										to you. In addition, “immedi8money.com”
										may disclose your contact details to
										third parties to permit those
										organizations to offer and provide
										information about their products and
										services that may interest you. These
										third parties may include, as examples:
									</p>
									<br />
									<p>
										Immedi8 Services Ltd.
										(“immedi8money.com”) affiliates
										Authorized Immedi8 Group (GM) Ltd.
										(“immedi8money.com”) & Zahra Group (GM)
										Ltd (zahraltd.net”) agents
									</p>
									<br />
									<p>
										Financial services companies, such as
										banks, credit card companies, brokerage
										houses, mortgage lenders and mortgage
										originators
									</p>
									<br />
									<p>
										You may “opt out” or withdraw consent to
										the use and/or disclosure of your
										personal information for the purposes
										described in this section at any time by
										checking the appropriate box on an
										online or offline form, if available, or
										by calling +44 203 174 0659 or otherwise
										by contacting us as described in
										“Contact Us” below. If you do not “opt
										out” or withdraw your consent as
										described above, we will assume that you
										consent to our use and disclosure of
										your personal information for marketing
										and solicitation purposes as described
										in this section.
									</p>
									<br />
									<h3 className="font-extrabold">
										INTERNET TECHNOLOGY
									</h3>
									<br />
									<p>
										Some of “immedi8money.com” services (for
										example money transfers) are made
										available using online forms at our Web
										site, www.immedi8money.com. Personal
										information you provide on online forms
										or by other electronic means will be
										collected used and disclosed as
										described generally in this Privacy
										Statement.
									</p>
									<br />
									<p>
										In addition, when visit or use our Web
										sites, we collect information about the
										domain and host from which you access
										the Internet; your computer’s Internet
										address; the browser and operating
										system software you use; the date and
										time you access our Web site and the
										Internet address of the site from which
										you linked to our Web site when you
										visit us. We use this information to
										diagnose, administer and optimize our
										Web sites and web-related services.
									</p>
									<br />
									<p>
										When registering or creating an account
										at our Web sites, we collect your
										password and login name and other
										information we may request in order to
										identify you, maintain security of our
										Web site and verify and control access
										to your account or online profile. If
										you make inquiries through the e-mail
										links, forms or other contact methods
										provided on our Web sites, these
										inquiries are forwarded to the relevant
										office or department, and are used to
										respond to your inquiry and maintain a
										record of correspondence.
									</p>
									<br />
									<p>
										We use Internet technologies like
										cookies and web beacons to facilitate
										the services we provide on our Web sites
										and your use of our Web sites,
										including:
									</p>
									<br />
									<ul className="list-decimal p-5 text-l">
										<li>
											To assist us in providing services
											to you;
										</li>
										<li>
											To allow you to change web pages
											during your visit without having to
											re-enter your password;
										</li>
										<li>
											To store your preferences and other
											information and to track activity on
											our website;
										</li>
										<li>
											To better understand the
											effectiveness of our promotional
											campaigns;
										</li>
										<li>
											To determine whether you came to our
											site from a banner ad or an
											affiliate Web site;
										</li>
										<li>
											To deliver Information specific to
											your interests on additional web
											sites; and
										</li>
										<li>
											To determine whether you’ve acted on
											our promotional messages
										</li>
									</ul>
									<br />
									<p>
										A “cookie” is a text file placed on your
										computer’s hard drive by a web server,
										which allows for personalization of
										certain aspects of your visit to that
										Web site. “Web beacons” are transparent
										electronic images placed in the web code
										that collect non-personal data while
										visiting a web site. Cookies and web
										beacons can usually be disabled by
										changing your browser preferences. Your
										browser usually has documentation on how
										to disable cookies and web beacons. Note
										that disabling cookies may limit the
										performance of “prabhuremit.com” Web
										site(s). If cookies are disabled,
										certain features of our Web sites may
										not function properly, and you may not
										be able to register or use your online
										account.
									</p>
									<br />
									<p>
										Children’s Privacy. Our Web sites are
										not directed at children under the age
										of 13. “prabhuremit.com” does not
										knowingly collect or maintain personal
										information at our Web site from those
										we actually know are under the age of
										13.
									</p>
									<br />
									<p>
										External Web sites. Our Web sites may be
										linked to or from third party Web sites.
										These links are provided as a
										convenience only, and “immedi8money.com”
										is not responsible for the content or
										privacy practices of Web sites that are
										linked to or from our Web site. You are
										advised to review the privacy policies
										of any third party Web sites you visit.
									</p>
									<br />
									<h3 className="font-extrabold">
										YOUR CONSENT
									</h3>
									<br />
									<p>
										Generally, by providing us with personal
										information, we will assume that you
										consent to our collection, use and
										disclosure of such information for the
										purposes described in this Privacy
										Statement, if applicable, or otherwise
										at the time of collection of your
										personal information.
									</p>
									<br />
									<p>
										Consent to the collection, use and
										disclosure of personal information may
										be given in various ways. Consent can be
										express (for example, orally,
										electronically or on a form you may sign
										describing the intended uses and
										disclosures of personal information) or
										implied (for example, when you provide
										information necessary for a service you
										have requested). You may provide your
										consent in some circumstances where
										notice has been provided to you about
										our intentions with respect to your
										personal information and you have not
										withdrawn your consent for an identified
										purpose, such as by using an “opt out”
										option provided, if any. Consent may be
										given by your authorized representative
										(such as a legal guardian or a person
										having a power of attorney).
									</p>
									<br />
									<p>
										You may withdraw your consent to our
										collection, use and disclosure of
										personal information at any time,
										subject to contractual and legal
										restrictions and reasonable notice. Note
										that if you withdraw your consent to
										certain uses of your personal
										information, we may no longer be able to
										provide certain of our products or
										services. Note also that where we have
										provided or are providing services to
										you, your consent will be valid for so
										long as necessary to fulfil the purposes
										described in this Privacy Statement or
										otherwise at the time of collection, and
										you may not be permitted to withdraw
										consent to certain necessary uses and
										disclosures (for example, but not
										limited to, maintaining reasonable
										business and transaction records,
										disclosures to The United States and
										foreign government entities as required
										to comply with laws, and reporting on
										credit information after credit has been
										granted, if applicable).
									</p>
									<br />
									<p>
										We may also be required or permitted
										under statute or regulation to collect,
										use or disclose personal information
										without your consent, for example to
										comply with a court order, to comply
										with local or federal regulations or a
										legally permitted inquiry by a
										government agency, or to collect a debt
										owed to us.
									</p>
									<br />
									<h3 className="font-extrabold">
										CONFIDENTIALITY AND SECURITY
									</h3>
									<br />
									<p>
										We endeavor to maintain physical,
										electronic and procedural safeguards to
										protect personal information against
										loss or theft, as well as unauthorized
										access, disclosure, copying, use or
										modification. Authorized employees,
										agents, representatives and mandataries
										that require access to your personal
										information in order to fulfill their
										job requirements will have access to
										your personal information. No data
										transmission over the Internet or the
										telephone can be guaranteed to be
										perfectly secure, and any personal
										information you submit to us or access
										electronically or over the telephone is
										done at your own risk, and
										“immedi8money.com” does not guarantee or
										warrant the security of information
										transmitted in these manners. You should
										be aware that third parties may
										unlawfully intercept your transmissions
										or may wrongly instruct you to disclose
										personal information to them while
										posing as “immedi8money.com” and you
										should exercise caution when providing
										personal information to any
										person.“immedi8money.com” record
										retention policies dictate that we
										maintain information about you,
										including your opt-out choices, for a
										fixed time period. If you do not perform
										another transaction during the fixed
										time period, your Information, as well
										as your opt-out choice will be removed.
										If you perform another transaction or
										otherwise provide us with personal
										information thereafter, you will be
										afforded another opportunity to opt-out.
									</p>
									<br />
									<h3 className="font-extrabold">
										ACCESS AND CORRECTION
									</h3>
									<br />
									<p>
										“immedi8money.com” may establish and
										maintain a file of your personal
										information for the purposes described
										in this Privacy Statement, which will be
										accessible at the office in the Contact
										Us section below. If you wish to request
										access or correction of your personal
										information in our custody or control,
										you may write to the mailing address
										provided below, attention Chief Privacy
										Officer. Your right to access or correct
										your personal information is subject to
										applicable legal restrictions. To
										protect your privacy and security, we
										may require additional information to
										verify your identity when requesting
										access or correction.
									</p>
									<br />
									<h3 className="font-extrabold">CHANGES</h3>
									<br />
									<p>
										“immedi8money.com” reserves the right to
										modify this Privacy Statement from time
										to time. You can get updated Privacy
										Statements by calling us at the
										telephone number listed above or by
										visiting our Web site at
										www.immedi8money.com. We urge you to
										review this Privacy Statement frequently
										to obtain the current version. Your
										continued provision of personal
										information or use of our services
										following any changes to this Privacy
										Statement constitutes your acceptance of
										any such changes.
									</p>
									<br />
									<h3 className="font-extrabold">
										CONTACT US
									</h3>
									<p>
										BY MAIL: IMMEDI8 SERVICES LTD. <br />{" "}
										IMPERIAL HOUSE, 2 HEIGHAM ROAD <br />{" "}
										LONDON, E6 2JG <br />
										UNITED KINGDOM BY TELEPHONE: +44 203 174
										0659 <br /> BY EMAIL:
										TRANSFERS@IMMEDI8MONEY.COM
									</p>
									<br />
								</div>
							</AccordionBody>
						</Accordion>

						<Accordion
							className="mb-2"
							open={open === 6}
							onClick={() => handleOpen(6)}>
							<AccordionHeader className="bg-slate-200 p-3 rounded-xl text-gray-800">
								Refund Policy
							</AccordionHeader>
							<AccordionBody className="text-justify">
								<div className="scroller p-5 text-justify">
									<p>
										IMMEDI8 SERVICES LTD. TRADING AS
										I-MONEY, IMMEDI8 FINANCE & IMMEDI8 MONEY
										(“IMMEDI8MONEY.COM”)
									</p>
									<br />
									<h3 className="font-extrabold">
										WE ARE SUBJECT TO THE FOLLOWING REFUND
										POLICY:
									</h3>
									<br />
									<h3 className="font-extrabold">
										REFUNDS OF PRINCIPAL AMOUNT
									</h3>
									<br />
									<p>
										Refund of Principal Amount and
										cancellation of the Money Transfer will
										be made upon written request of the
										Sender if payment to the Receiver has
										not yet been made at the time the
										request is processed by Immedi8 Services
										Ltd. (“immedi8money.com”). Refunds will
										be made within 45 days of receipt of a
										valid written request from the Sender.
									</p>
									<br />
									<h3 className="font-extrabold">
										REFUNDS OF FEES
									</h3>
									<br />
									<p>
										Refund of Fees will be made upon written
										request of the Sender if the Money
										Transfer is not available to the
										Receiver within the time specified by
										Immedi8 Services Ltd.
										(“immedi8money.com”) for the selected
										service, subject to the business hours
										of the location selected by the Receiver
										for payment and other special
										conditions. Refunds will be made within
										45 days of receipt of a valid written
										request from the Sender.
									</p>
								</div>
							</AccordionBody>
						</Accordion>

						<Accordion
							className="mb-2"
							open={open === 7}
							onClick={() => handleOpen(7)}>
							<AccordionHeader className="bg-slate-200 p-3 rounded-xl text-gray-800">
								Complaint Policy
							</AccordionHeader>
							<AccordionBody className="">
								<div className="scroller p-5 text-justify">
									<br />
									<h3 className="font-extrabold ">
										COMPLAINTS PROCEDURE
									</h3>
									<br />
									<h3 className="text-l">1. Aims</h3>
									<br />
									<p>
										In Addition to our utmost endeavors to
										providing the best services at all
										times, we are also committed to
										upholding all regulatory requirements,
										fulfilling our customer need and
										protecting their rights. In a situation
										where you the customer is dissatisfied;
										please follow this procedure to have us
										resolve your complaint as soon as we
										can.
									</p>
									<br />
									<h3 className="text-l">
										2. REASONS FOR THE PROCEDURE{" "}
									</h3>
									<br />
									<p>
										Provide the best customer service to the
										clients and fulfilling our regulatory
										requirements.
									</p>
									<br />
									<h3 className="text-l">3. OBJECTIVES</h3>
									<br />
									<p>
										3.1. To describe the formal procedure of
										dealing fairly and consistently with
										customer complaints;
									</p>
									<p>
										3.2. To inform customers of the route by
										which they can express a complaint
									</p>
									<p>
										3.3. To inform staff of the complaints
										procedure so that they know what to do
										if a customer complaint arises
									</p>
									<br />
									<h3 className="text-l">4. PROCEDURES</h3>
									<br />
									<p>
										Customers should try to resolve the
										matter directly with Immedi8 Money
									</p>
									<br />
									<h3 className="text-l">4.1 STEP 1</h3>
									<br />
									<p>
										To help us investigate and resolve
										Clients complaint, our standard
										complaint form will need to be
										completed, and this can be found on our
										website or on demand from any of our
										agents or branch location. You are
										required to supply the following
										information on the form Your name and
										address Daytime telephone number Time
										you prefer us to contact you <br />{" "}
										<span>
											Your 12-digit transaction reference
											number Details of your complaint How
											you want your complaint to be
											resolved
										</span>
									</p>
									<br />
									<h3 className="text-l">4.2 STEP 2</h3>
									<br />
									<p>
										If Step 1 did not resolve the complaint,
										the customer should make a complaint in
										writing to the Complaint Quality
										Assurance Manager at Immedi8 Services,
										contact details below;
									</p>
									<br />
									<p>
										Quality Assurance Manager Immedi8
										Services Ltd Imperial House 2 Heigham
										Road, London, E6 2JG
									</p>
									<br />
									<p>Email: Complaints@immedi8services.com</p>
									<br />
									<p>
										The Quality Assurance Manager will log
										the complaint and acknowledge its
										receipt within 3 working days of
										receiving the complaint.
									</p>
									<br />
									<p>
										The Quality Assurance Manager will
										forward the complaint, with an
										investigation form clearly identifying
										the timescales, to the relevant
										investigating manager who will conduct a
										full investigation
									</p>
									<br />
									<h3 className="text-l">
										5. IF THE CUSTOMER IS STILL UNHAPPY
									</h3>
									<br />
									<p>
										Our aim is to resolve all complaints
										fairly and promptly. However, in the
										unlikely event that the matter is still
										not resolved to the customer’s
										satisfaction, or if 8 weeks passed since
										you first brought your complaint to our
										attention, you have the right to refer
										your complaint to the Financial
										Ombudsman Service. If you want the
										Financial Ombudsman Service to look into
										your complaint, you must contact them
										within six months of the date of any
										final response issued. You can write to
										them at:
									</p>
									<br />
									<p>The Financial Ombudsman Services</p>
									<br />
									<p>
										South Quays Plaza <br /> 183 Marsh Wall{" "}
										<br /> London E14 9SR <br /> Email:
										complaint.info@financial-ombudsman.org.uk{" "}
										<br />
										Website: www.financial-ombudsman.org.uk
									</p>
									<br />
									<p>
										The Financial Ombudsman Service (FOS)
										will only consider your complaint once
										you tried to resolve it with us, so
										please first raise your concerns with us
										and we’ll do all we can to help.
										Customers from countries other than the
										UK may have another local ombudsman or
										different out of court and redress
										procedures
									</p>
									<br />
									<br />
									<h3 className="text-l">6. RESPONSIBILTY</h3>
									<br />
									<p>
										The Quality Assurance Manager is
										responsible for ensuring that all
										customer complaints are dealt with
										promptly, fairly and consistently and in
										accordance with this procedure. The
										investigating manager is responsible for
										conducting a full, documented,
										investigation and providing a written
										response to the Quality Assurance
										Manager
									</p>
									<br />
									<p>
										This procedure was reviewed and revised
										January 2012
									</p>
									<br />
									<p>
										Signed: …………… Fatou Ceesay……………… Date:
										…31st …January…. 2018 Position:
										…….Director……………………
									</p>
									<br />
									<p>
										Please click here to download COMPLAINT
										FORM:
									</p>
								</div>
							</AccordionBody>
						</Accordion>
					</div>

					{/* ACCORDION */}

					{/* IMAGE */}
					<div className=" flex-1 w-1/4 ">
						<div>
							<img src={policy} alt="policy image" width="80%" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
