import C from 'catlogicjs'

self.addEventListener("message", inferTruths);

function inferTruths(e) {
  const set = e.data.map((p) => {
    return new C.Proposition(p.quantity.label, p.subject.label, p.quality.label, p.predicate.label, p.truthvalue.label)
  })
  console.log('[WORKER] MSG FROM MAIN THREAD:', set)
  postMessage(new C.PremiseCollection(set).inferredTruthsUnique());
}