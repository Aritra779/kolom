import Effects from '../../../Effects/Effects';
import doc from './Donation.json';
import party from 'party-js';
const List = ({ edition }) => {

    const runParty = (id) => {
        const target = document.getElementById(id);
        party.confetti(target, {
            count : party.variation.range(20,40),
        });
    }

    return (
        <article className="donationList">
            <header>
                <h1 className="donationList__title">
                    <span className="donationList__title--top">Donations</span>
                    <span className="donationList__title--bottom">{edition['volume']}</span>
                </h1>
            </header>
            <div className="donationList__profiles">
                <div className="row row-cols-1 row-cols-md-2 target">
                    {
                        edition['contributors'].map(donor => {
                            let divId = edition['volume'].replace('Edition ', '') + '_' + edition['contributors'].indexOf(donor);
                            return (
                                <div id={divId} key={donor['name']} className="col" onClick={() => runParty(divId)}>
                                    <article className="donationList__profile">
                                        <span className="donationList__name" lang = "bn">{ donor['name']}</span>
                                        <span className="donationList__value">{ donor['amount']}<span>INR</span></span>
                                    </article>
                                </div>
                                );
                        })
                    }
                </div>
            </div>
        </article>
        );
}

const Received = () => {
    return (
		<div>
			<Effects
				id="About_Received"
				title="Donation Received"
			/>
            <div id="Receive" className="row mt-5 mb-5 g-4">
                {
                    doc.map(edition => {
                        return (
                            <div key={doc.indexOf(edition)} className="col-md-12">
                                <div className="names">
                                    <List
                                        edition={edition}
                                    />
                                </div>
                            </div>
                        );
                    })
                }
			</div>
		</div>
		);
}

export default Received;