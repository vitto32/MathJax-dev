#!gmake
#
# Version: Apache License 2.0
#
# Copyright (c) 2013 The MathJax Consortium
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

include ../custom.cfg

all: otf afm svg img ams tables

small: smallK pack

smallK:
	$(MAKE) -C OTF/TeX cleanSVG
	$(MAKE) -C SVG/TeX clean
	$(MAKE) -C AFM/TeX clean
	$(MAKE) -C OTF/TeX otf2ttf
	$(MAKE) -C OTF/TeX verdanaCopy
	$(MAKE) -C OTF/TeX svg
	$(MAKE) -C OTF/TeX woff
	$(MAKE) -C OTF/TeX install
	$(MAKE) -C SVG/TeX all
	$(MAKE) -C AFM/TeX all
	pack

pack:
	@for file in `find $(MATHJAXDIR)/unpacked/jax/output -type f | grep '.js' | grep 'TeX' | $(SED) 's|$(MATHJAXDIR)/unpacked/\(.*\)|\1|'`; do \
		echo "$$file"; \
		uglifyjs "$(MATHJAXDIR)/unpacked/$$file" -o "$(MATHJAXDIR)/$$file"; \
		done

otf:
	$(MAKE) -C OTF/TeX all

afm:
	$(MAKE) -C AFM/TeX all
	#$(MAKE) -C AFM/STIX-1.1 all

svg:
	$(MAKE) -C SVG/TeX all

img:
	$(MAKE) -C IMG/TeX all

ams:
	$(MAKE) -C AMS all

tables:
	#$(MAKE) -C Tables/STIX-1.1 all
	$(MAKE) -C Tables/TeX all

clean:
	$(MAKE) -C OTF/TeX clean
	$(MAKE) -C AFM/TeX clean
	#$(MAKE) -C AFM/STIX-1.1 clean
	$(MAKE) -C SVG/TeX clean
	$(MAKE) -C IMG/TeX clean
	$(MAKE) -C AMS clean
	#$(MAKE) -C Tables/STIX-1.1 clean
	$(MAKE) -C Tables/TeX clean
