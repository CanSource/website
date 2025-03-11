---
title: "Designing Input Protection"
description: "Tutorial for designing input protection circuitry for reverse-voltage, over-current,
 and transient-voltage conditions."
pubDate: "Mar 12 2025"
heroImage: "/blog-placeholder-3.jpg"
authors:
 - J. L. Hay 
---

Electronics in any product are often accidentally exposed to voltages or currents outside of the
bounds of normal operations. It's up to the designer to decide how far outside the normal bounds a
circuit should survive and how the electronics in the product should protect more sensitive parts
from exposure to the out-of-bounds signals. For circuits that are to be used by non-technical users
or in harsh environments, input protection is of utmost importance for the longevity of the product.

In this article we will cover:
 1. [A motivating example for designing input protection.](#motivating-example)
 2. [Requirements on input protection.](#desiging-protection)
 3. [Specific circuits that can be used to implement input protection and how to design them.](#protection-circuits)

If you are already familiar with protection circuity you may wish to jump directly to 
[section 3](#protection-cicrcuits).

<h3 id="motivating-example">An Example</h3>


<h3 id="designing-protection">Desiging Protection</h3>


<h3 id="protection-circuits">Protection Circuits</h3>


<h4>MOSFET Reverse-Voltage Protection</h4>


<h5>A note on reverse-current protection</h5>

There is a sneaky issue with MOSFET-based reverse-voltage protection. Consider what happens when the
voltage after the the MOSFET switch on this high-side reverse-voltage protection circuit.

... Insert figure ...

In this example $V_{gs}$ remains negative, and causes the P-type MOSFET to remain open. If the 
system upstream is at a lower potential than the protected side of this RVP circuit, current may 
flow backwards through the protection circuit. While this wouldn't necessarily be immediately 
catastrophic to any of the components in the protection circuitry (unless too much current flows
through the MOSFET for too long), it may cause damage to the upstream circuit.


<h4>Fuses</h4>

<h4>TVS Diodes</h4>