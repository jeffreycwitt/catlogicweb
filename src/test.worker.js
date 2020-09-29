import C from 'catlogicjs'

// See https://github.com/timarney/react-app-rewired/issues/426#issuecomment-576423171
//for why eslin-disable-next-line is necessary
// eslint-disable-next-line
self.addEventListener("message", inferTruths);

function inferTruths(e) {
  const set = e.data.map((p) => {
    return new C.Proposition(p.quantity.label, p.subject.label, p.quality.label, p.predicate.label, p.truthvalue.label)
  })
  console.log('[WORKER] MSG FROM MAIN THREAD:', set)
  postMessage(new C.PremiseCollection(set).inferredTruthsUnique());
}