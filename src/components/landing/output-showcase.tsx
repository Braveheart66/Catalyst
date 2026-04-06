import { RevealItem, RevealSection } from "@/components/landing/motion-primitives";
import { TiltCard } from "@/components/landing/tilt-card";

export function OutputShowcase() {
  return (
    <RevealSection className="relative z-10 px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <RevealItem className="mb-14">
          <p className="eyebrow">Output Showcase</p>
          <h2 className="section-title">Everything a founder needs, generated at launch speed.</h2>
        </RevealItem>

        <div className="grid gap-4 md:grid-cols-2">
          <RevealItem>
            <TiltCard className="feature-card">
              <div className="feature-head">
                <h3>Business Model Canvas</h3>
                <span>Ready in seconds</span>
              </div>
              <div className="mini-canvas">
                <span>Problem</span>
                <span>Segment</span>
                <span>Channels</span>
                <span>Value Prop</span>
                <span>Revenue</span>
                <span>Costs</span>
              </div>
            </TiltCard>
          </RevealItem>

          <RevealItem>
            <TiltCard className="feature-card">
              <div className="feature-head">
                <h3>Financial Projections</h3>
                <span>Ready in seconds</span>
              </div>
              <svg viewBox="0 0 300 130" className="mini-chart" aria-hidden="true">
                <polyline points="8,116 56,100 112,78 168,54 224,36 292,20" />
                <polyline points="8,116 56,108 112,98 168,89 224,78 292,70" className="muted" />
              </svg>
            </TiltCard>
          </RevealItem>

          <RevealItem>
            <TiltCard className="feature-card">
              <div className="feature-head">
                <h3>Pitch Deck</h3>
                <span>Ready in seconds</span>
              </div>
              <div className="slide-stack" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </TiltCard>
          </RevealItem>

          <RevealItem>
            <TiltCard className="feature-card">
              <div className="feature-head">
                <h3>Competitor Analysis</h3>
                <span>Ready in seconds</span>
              </div>
              <div className="quadrant">
                <span className="x" />
                <span className="y" />
                <i className="p1" />
                <i className="p2" />
                <i className="p3" />
                <i className="p4" />
              </div>
            </TiltCard>
          </RevealItem>

          <RevealItem className="md:col-span-2">
            <TiltCard className="feature-card mx-auto max-w-[720px]">
              <div className="feature-head">
                <h3>Clickable MVP</h3>
                <span>Ready in seconds</span>
              </div>
              <div className="phone-frame" aria-hidden="true">
                <div className="phone-notch" />
                <div className="phone-ui">
                  <span />
                  <span />
                  <span />
                  <button type="button">Match sitter</button>
                </div>
              </div>
            </TiltCard>
          </RevealItem>
        </div>
      </div>
    </RevealSection>
  );
}
