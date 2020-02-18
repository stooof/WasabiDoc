(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{258:function(e,t,i){"use strict";i.r(t);var a=i(0),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"pay-to-endpoint"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#pay-to-endpoint"}},[e._v("#")]),e._v(" Pay To EndPoint")]),e._v(" "),i("p"),i("div",{staticClass:"table-of-contents"},[i("ul",[i("li",[i("a",{attrs:{href:"#the-basics"}},[e._v("The Basics")]),i("ul",[i("li",[i("a",{attrs:{href:"#p2ip"}},[e._v("P2IP")])]),i("li",[i("a",{attrs:{href:"#bulletproofs"}},[e._v("Bulletproofs")])]),i("li",[i("a",{attrs:{href:"#coinjoin"}},[e._v("CoinJoin")])]),i("li",[i("a",{attrs:{href:"#blockchain-heuristics"}},[e._v("Blockchain Heuristics")])]),i("li",[i("a",{attrs:{href:"#clusterfuck-wallet"}},[e._v("Clusterfuck Wallet")])])])]),i("li",[i("a",{attrs:{href:"#the-protocol"}},[e._v("The Protocol")]),i("ul",[i("li",[i("a",{attrs:{href:"#part-1-end-to-end-connection-establishment"}},[e._v("Part 1: End-To-End Connection Establishment")])]),i("li",[i("a",{attrs:{href:"#part-2-sender-receiver-coinjoin"}},[e._v("Part 2: Sender-Receiver CoinJoin")])]),i("li",[i("a",{attrs:{href:"#extensions"}},[e._v("Extensions")])])])]),i("li",[i("a",{attrs:{href:"#the-novelty-of-sender-receiver-scheme"}},[e._v("The Novelty of Sender-Receiver Scheme")])]),i("li",[i("a",{attrs:{href:"#conclusion"}},[e._v("Conclusion")])])])]),i("p"),e._v(" "),i("hr"),e._v(" "),i("blockquote",[i("p",[e._v("Satoshi's Vision + CoinJoin + Bulletproofs = Sad Blockchain Analysts")])]),e._v(" "),i("p",[e._v("I attended a brainstorming event on Bitcoin privacy.\nIn this article, I will assume all participants of this meeting would like to remain anonymous, unless she or he explicitly asks me to properly credit her or him.\nTo keep this post coherent, I will refer to specific participants as Jessie, James and Meowth in an interchangeable, (not pseudonymous) way, hence Team Rocket.")]),e._v(" "),i("p",[e._v("My goal today is to put out one of the ideas of this meeting in a digestible way.\nI assume some other Team Rocket member will do the same, in their own way.\nBut first, let me walk you through some basic concepts.\nBut before that, I’d like to credit some attendees and link to their articles on the event.")]),e._v(" "),i("h4",{attrs:{id:"non-anonymous-attendees"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#non-anonymous-attendees"}},[e._v("#")]),e._v(" Non-Anonymous Attendees")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://twitter.com/wintercooled",target:"_blank",rel:"noopener noreferrer"}},[e._v("Matthew Haywood"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://twitter.com/adam3us",target:"_blank",rel:"noopener noreferrer"}},[e._v("Adam Back"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://twitter.com/notgrubles",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grubles"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://twitter.com/dangershony",target:"_blank",rel:"noopener noreferrer"}},[e._v("Danger Shony"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://twitter.com/real_or_random",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tim Ruffing"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://twitter.com/waxwing__",target:"_blank",rel:"noopener noreferrer"}},[e._v("Adam Gibson"),i("OutboundLink")],1)])]),e._v(" "),i("h2",{attrs:{id:"the-basics"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#the-basics"}},[e._v("#")]),e._v(" The Basics")]),e._v(" "),i("h3",{attrs:{id:"p2ip"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#p2ip"}},[e._v("#")]),e._v(" P2IP")]),e._v(" "),i("blockquote",[i("p",[e._v("Bitcoin 0.1 supported Bitcoin addresses just like today, but it also had a “pay to IP address” feature.\nWhen you used this, you’d connect to the IP and get the sender’s full public key, and then send to that.\n[…] Pay-to-IP was removed around 0.5, I think. — "),i("a",{attrs:{href:"https://reddit.com/u/theymos",target:"_blank",rel:"noopener noreferrer"}},[e._v("Theymos"),i("OutboundLink")],1),e._v(", 2016")])]),e._v(" "),i("p",[e._v("Satoshi built a feature into Bitcoin, called P2IP.\nThis has terrible security and privacy drawbacks, so it was removed.\nLittle we knew, when we came up with our Pay To EndPoint (P2EP) scheme, that we reinvented this feature, but in a secure and a privacy enhancing way.\nIn our scheme the EndPoint can not only be an IP address, but also a domain, preferably a Tor onion.")]),e._v(" "),i("p",[e._v("When Jessie realized what we have done, she jokingly noted: "),i("em",[e._v('"We perfected Satoshi\'s vision!"')])]),e._v(" "),i("h3",{attrs:{id:"bulletproofs"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bulletproofs"}},[e._v("#")]),e._v(" Bulletproofs")]),e._v(" "),i("p",[e._v("Bulletproofs (BP) is a zero-knowledge proof system, often cited together with Confidential Transactions.\nHowever we use BP for a different purpose.\nWe utilize it to prevent a UTXO spoofing attack, that I will expand upon later.\nHowever James argues, we do not even need to deal with the implementation complexity of Bulletproofs, since a simple cut and choose defense might be sufficient.")]),e._v(" "),i("p",[e._v("It is also worth noting, that our scheme does not require any soft or hard fork.")]),e._v(" "),i("h3",{attrs:{id:"coinjoin"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#coinjoin"}},[e._v("#")]),e._v(" CoinJoin")]),e._v(" "),i("p",[e._v("My regular readers are probably sick of me repeatedly explaining CoinJoin, (CJ) so feel free to skip this two sentences here.\nCJ stands for joining multiple users’ inputs into one transaction.\nIt is also worth pointing out that most CJ scheme uses equal sized outputs.\nIf it does not, then it provides zero privacy. But that is just an oversimplification, I often say.\nNo matter how unintuitive it may seem, there are CJs with unequal sized outputs those still provide privacy, because the adversary have to recognize this was a CJ transaction in the first place.\nI will expand upon it later.")]),e._v(" "),i("h3",{attrs:{id:"blockchain-heuristics"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#blockchain-heuristics"}},[e._v("#")]),e._v(" Blockchain Heuristics")]),e._v(" "),i("p",[e._v("Blockchain Heuristics are the methods Blockchain Analytics uses to deanonymize you.\nThese companies are founded on these heuristics. The scheme Team Rocket is proposing breaks some of these heuristics to the point that today’s Blockchain Analysis would be instantly broken, even if you do not use our scheme, since it would be really hard to figure out if you used P2EP or not.")]),e._v(" "),i("h4",{attrs:{id:"heuristic-1-all-inputs-are-co-owned"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#heuristic-1-all-inputs-are-co-owned"}},[e._v("#")]),e._v(" Heuristic 1: All inputs are co-owned.")]),e._v(" "),i("p",[e._v("This means, if you are joining together more than one input, then it must all come from you.\nYou could say that CJ breaks this assumption instantly, but (equal sized) CJ is easily identifiable, so that is easy to handle.")]),e._v(" "),i("h4",{attrs:{id:"mixing-heuristics-subset-sum-analysis"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mixing-heuristics-subset-sum-analysis"}},[e._v("#")]),e._v(" Mixing Heuristics: Subset-Sum Analysis.")]),e._v(" "),i("p",[e._v("This heuristics can be applied to CJ transactions, (and all mixing technique in general,) where the output sizes are not equal.\nFor example if James and Meowth joins their 1 BTC and 2 BTC coins together and the outputs would be 2 BTC and 1 BTC, it is easy to delink that transaction.\nNote, it is only possible if CJ transaction was identified.")]),e._v(" "),i("h4",{attrs:{id:"heuristics-meta-what-doesn-t-exist-doesn-t-exist"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#heuristics-meta-what-doesn-t-exist-doesn-t-exist"}},[e._v("#")]),e._v(" Heuristics Meta: What Doesn’t Exist Doesn’t Exist.")]),e._v(" "),i("p",[e._v("It is evident, but it is worth pointing out.\nIf Blockchain Analysis sees a transaction on the Blockchain that theoretically can be interpreted in many different ways, but in practice only one way of interpretation is implemented at that point in time, then that interpretation is what Blockchain Analysis assumes.\nThis is why it is really easy to be anonymous with Bitcoin today.\nJust get familiar with some Blockchain Analysis heuristics, break them manually and they will interpret your transaction in the wrong way with 99% accuracy, because you are the only person who builds such transaction in the world and they are not aware of them.\nTo denounce the evils of Blockchain Analytics!")]),e._v(" "),i("p",[e._v("To go to town with heuristics, see Adam Gibson’s "),i("a",{attrs:{href:"https://www.youtube.com/watch?v=XORDEX-RrAI&feature=youtu.be&t=23359",target:"_blank",rel:"noopener noreferrer"}},[e._v("Building on Bitcoin talk"),i("OutboundLink")],1),e._v(", Kristov Atlas’s "),i("a",{attrs:{href:"https://www.coinjoinsudoku.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("CoinJoin Sudoku"),i("OutboundLink")],1),e._v(", where he broke Blockchain info’s now discontinued SharedCoin feature and "),i("a",{attrs:{href:"https://www.youtube.com/watch?v=HScK4pkDNds",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nick Jonas’s 2016 talk"),i("OutboundLink")],1),e._v(" in a Zurich Meetup.")]),e._v(" "),i("h3",{attrs:{id:"clusterfuck-wallet"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#clusterfuck-wallet"}},[e._v("#")]),e._v(" Clusterfuck Wallet")]),e._v(" "),i("p",[e._v("The last concept I would like to get you familiar with is something I have written about.\nIt is the "),i("a",{attrs:{href:"https://medium.com/@nopara73/new-bitcoin-anonymity-technique-the-clusterfuck-wallet-d48aa1787324",target:"_blank",rel:"noopener noreferrer"}},[e._v("clusterfuck wallet"),i("OutboundLink")],1),e._v(".\nThis is either the craziest idea I ever had or the most brilliant one\nmedium.com")]),e._v(" "),i("blockquote",[i("p",[e._v("I remember reading a while ago Mircea Popescu’s ridiculous article, where he states something like Bitcoin is perfectly anonymous.\nHis reasoning went like this: Blockchain analysis cannot make any reasonable conclusion, because a Bitcoin transaction can be interpreted in many different ways. — Ádám Ficsor")])]),e._v(" "),i("p",[e._v("The goal of this wallet was to make Blockchain Heuristics as unreliable as it can get, by take advantage of Heuristics Meta: What Doesn’t Exist Doesn’t Exist.\nThe idea is: make them to exist. With that creating chaos, or “clusterfuck” if you like.\nTurns out P2EP is a great tool to bring many exotic transactions into existence, not only the one the Team Moon Rocket is proposing here.")]),e._v(" "),i("h2",{attrs:{id:"the-protocol"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#the-protocol"}},[e._v("#")]),e._v(" The Protocol")]),e._v(" "),i("h3",{attrs:{id:"part-1-end-to-end-connection-establishment"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#part-1-end-to-end-connection-establishment"}},[e._v("#")]),e._v(" Part 1: End-To-End Connection Establishment")]),e._v(" "),i("p",[e._v("The idea is to make the recipient participate in the transaction, which would be great for many different reasons, I will come back to later.\nFor now, we had a practical problem to solve.\nHow do we establish a connection between the sender and the recipient in a P2P way?")]),e._v(" "),i("p",[e._v("Jessie’s idea was to extend the "),i("RouterLink",{attrs:{to:"/using-wasabi/BIPs.html#bip-21-uri-scheme"}},[e._v("BIP21 Bitcoin URI Scheme")]),e._v(" with an endpoint.\nSomehow like this:\n"),i("code",[e._v("bitcoin:175tWpb8K1S7NmH4Zx6rewF9WQrcZv245W?endpoint=http://3g2upl4pq6kufc4m.onion")])],1),e._v(" "),i("p",[e._v("In this case, first the sender would try to figure out if the recipient is online.\nIf it is, then make a joint transaction together.\nIf it is not, then make the transaction in the traditional way.\nThe problem is "),i("RouterLink",{attrs:{to:"/using-wasabi/BIPs.html#bip-21-uri-scheme"}},[e._v("BIP 21")]),e._v(" is not fully adopted and it would be confusing to some user to copypaste a "),i("RouterLink",{attrs:{to:"/using-wasabi/BIPs.html#bip-21-uri-scheme"}},[e._v("BIP 21")]),e._v(" uri instead of just an address.\nTeam Rocket still debates if this is acceptable or not.")],1),e._v(" "),i("p",[i("strong",[e._v("James has provided an arguably infeasible solution to this issue. What if we would generate the endpoint from the given Bitcoin address?")])]),e._v(" "),i("p",[e._v("In this case, UX would stay the same: the receiver gives a Bitcoin address to the sender.\nHowever in the background the sender would try to establish a connection to the location corresponding to the Bitcoin address given and if that does not work, the sender sends the transaction normally.")]),e._v(" "),i("p",[e._v("The impracticality of James’s idea is that we would need either our own anonymity network to achieve this, like a fork of Tor or we would have to convince an existing anonymity network to incorporate our scheme.\nNevertheless, the idea is novel and worth keeping in mind.")]),e._v(" "),i("h3",{attrs:{id:"part-2-sender-receiver-coinjoin"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#part-2-sender-receiver-coinjoin"}},[e._v("#")]),e._v(" Part 2: Sender-Receiver CoinJoin")]),e._v(" "),i("p",[e._v("It may seem like I do not even have to say more, because negotiating a transaction where the sender and the recipient both participates is not that hard, especially that they usually trust each other, right?\nWrong.\nTheir was a point where Team Rocket gave up on this scheme, because they thought they encountered an unsolvable issue.")]),e._v(" "),i("p",[e._v("What if a random sender connects to a publicly known receiver, start negotiating the transaction and ends up not signing in the end? So the sender would learn a UTXO of the receiver and run away with that sensitive information, without following up.")]),e._v(" "),i("p",[e._v("In the most desperate moment Meowth had an idea: What if the receiver would feed the sender with fake UTXOs for a while, forcing the sender to sign a final transaction every time, but only the final, transaction with the receiver’s real UTXO would be broadcasted at the end?")]),e._v(" "),i("p",[e._v("In this case, if the sender is malicious and does not follow up, the only thing he can learn is “there is a small chance of probability that this utxo is the receiver’s.”\nWe called this to "),i("strong",[e._v("The Serial Method")]),e._v(".\nJames quickly came up with "),i("strong",[e._v("The Parallel Method")]),e._v(", where many UTXOs would be sent in parallel and one of them is the real one.\nIt reduces the number of rounds, however it tells the attacker that one of the UTXO is the real UTXO.")]),e._v(" "),i("p",[e._v("And finally Jessie came up with something elegant: "),i("strong",[e._v("The Bulletproofs Method")]),e._v(".\nBut I will not pretend that I fully understand it and I will leave it to others to expand upon the exact way of doing this.\nThe bottom line is, both the Serial and the Parallel method leaks a small amount of information, the Bulletproofs method does not leak any, and it does not need monitoring the Blockchain to select fake UTXOs.")]),e._v(" "),i("h3",{attrs:{id:"extensions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#extensions"}},[e._v("#")]),e._v(" Extensions")]),e._v(" "),i("p",[e._v("Before I explain the novelty of Part 2: Sender-Receiver CoinJoin protocol, I would like to point out that, Part 1: End-To-End Connection Establishment protocol has a side effect, namely it can be used to facilitate many things, I described in the Clusterfuck Wallet post.\nOne thing this can easily facilitate is merge avoidance.\nIf the sender would want to join multiple coins together, it could ask for multiple Bitcoin addresses from the receiver and send the coins one by one.\nIt could also establish a future cooperation with the receiver.\nFor example, the receiver, if online could participate in later transactions of the sender, thus breaking Heuristics 1 and Meta.\nBut really, if this P2EP would get adopted, the limit of the number of strange schemes, all breaking Blockchain Analysis assumptions is just the developer’s imagination.")]),e._v(" "),i("h2",{attrs:{id:"the-novelty-of-sender-receiver-scheme"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#the-novelty-of-sender-receiver-scheme"}},[e._v("#")]),e._v(" The Novelty of Sender-Receiver Scheme")]),e._v(" "),i("p",[e._v("If Blockchain Analysis looks at the transaction above, it will deduct:")]),e._v(" "),i("ul",[i("li",[e._v("The sender paid 6 BTC to the receiver.")]),e._v(" "),i("li",[e._v("The largest coin of the sender was 5 BTC.")]),e._v(" "),i("li",[e._v("The change is 2 BTC.")])]),e._v(" "),i("p",[e._v("And some other things.\nHowever if it the receiver participated in the transaction above, then this transaction could be interpreted in multiple ways, "),i("strong",[e._v("breaking some blockchain analysis heuristics, not only the transaction level, but globally!")]),e._v(" Remember Heuristics Meta?\nWhat does not exist, that does not exist.\nThus if some people start using strange schemes, that affects how Blockchain analysis interprets other transactions, too.")]),e._v(" "),i("h4",{attrs:{id:"side-effect-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#side-effect-1"}},[e._v("#")]),e._v(" Side effect 1:")]),e._v(" "),i("p",[e._v("In exchange for the privacy benefit, the sender has to pay more fees than a normal transaction.\nIt is a con for the sender, but a pro for the receiver, since the receiver does not have to consolidate its coin later.\nAlso it is a pro from a global point of view, due to its UTXO consolidation effects, I will detail a few lines below.")]),e._v(" "),i("h4",{attrs:{id:"side-effect-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#side-effect-2"}},[e._v("#")]),e._v(" Side effect 2:")]),e._v(" "),i("p",[e._v("Harder to coordinate, since the receiver must be online and the payment will take a few seconds longer.\nBut it is arguable, that if everyone would be able to use this scheme all the time, then that would be the new pattern, thus the new reliable Heuristics for Blockchain analysis.\nIt is crucial that not everyone use this pattern all the time. Its practical limitations achieves its goal.")]),e._v(" "),i("h4",{attrs:{id:"side-effect-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#side-effect-3"}},[e._v("#")]),e._v(" Side effect 3:")]),e._v(" "),i("p",[e._v("Receiver must have a hot wallet.\nThis is problematic in a buyer to merchant payment, since merchants usually receive coins to cold wallets.\nWhile my above comment still applies here, notice that this notion makes our problem of UTXO spying a corner case?\nThat attack only applied if “the receiver is publicly known.”\nIn peer to peer, person to person payments, the attacker would have to somehow first acquire an endpoint to a receiver.")]),e._v(" "),i("h4",{attrs:{id:"side-effect-4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#side-effect-4"}},[e._v("#")]),e._v(" Side effect 4:")]),e._v(" "),i("p",[e._v("Wallets must be deencrypted.\nSince many wallets only send-time decrypt the private keys, it would need to decrypt receive-time, too.\nThere are multiple ways to implement this.\nIt could be implemented in address generation time, which in our case it is also an endpoint generation time.\nBut if it is strictly implemented at receive time, the UTXO spying defense may not be needed at all.")]),e._v(" "),i("h5",{attrs:{id:"side-effect-5"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#side-effect-5"}},[e._v("#")]),e._v(" Side effect 5:")]),e._v(" "),i("p",[e._v("It helps with UTXO bloat.\nLet us assume the above transaction is a Sender-Receiver transaction.\nThen, if the receiver would not participate, that would mostly result in a one input, two output transaction.\nThis also means, the receiver would not have to consolidate its UTXOs later, which is a huge win for privacy.")]),e._v(" "),i("h2",{attrs:{id:"conclusion"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),i("p",[e._v("Overall, I feel this scheme can help a lot in Bitcoin’s privacy globally, especially if it is mixed with other clusterfuck wallet techniques.\nHowever, it must be said, there are some practical problems with it on the receiver’s side. Nevertheless it is simple to implement on the sender side and it affects globally everyone’s privacy, even those who do not use this scheme.")]),e._v(" "),i("p",[e._v("In the end… at the very least.\nCrazy ideas always worth writing down.\nSometimes they end up changing things.")])])}),[],!1,null,null,null);t.default=n.exports}}]);