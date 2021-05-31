import Metadata from './metadata';
import {
    matchesEntirely
} from './util';
import getNumberType from './getNumberType_';

/**
 * Checks if a given phone number is valid.
 *
 * If the `number` is a string, it will be parsed to an object,
 * but only if it contains only valid phone number characters (including punctuation).
 * If the `number` is an object, it is used as is.
 *
 * The optional `defaultCountry` argument is the default country.
 * I.e. it does not restrict to just that country,
 * e.g. in those cases where several countries share
 * the same phone numbering rules (NANPA, Britain, etc).
 * For example, even though the number `07624 369230`
 * belongs to the Isle of Man ("IM" country code)
 * calling `isValidNumber('07624369230', 'GB', metadata)`
 * still returns `true` because the country is not restricted to `GB`,
 * it's just that `GB` is the default one for the phone numbering rules.
 * For restricting the country see `isValidNumberForRegion()`
 * though restricting a country might not be a good idea.
 * https://github.com/googlei18n/libphonenumber/blob/master/FAQ.md#when-should-i-use-isvalidnumberforregion
 *
 * Examples:
 *
 * ```js
 * isValidNumber('+78005553535', metadata)
 * isValidNumber('8005553535', 'RU', metadata)
 * isValidNumber('88005553535', 'RU', metadata)
 * isValidNumber({ phone: '8005553535', country: 'RU' }, metadata)
 * ```
 */
export default function isValidNumber(input) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var metadata = arguments[2];

    metadata = new Metadata(metadata);

    // This is just to support `isValidNumber({})`
    // for cases when `parseNumber()` returns `{}`.
    if (!input.country) {
        return false;
    }

    if (!metadata.hasCountry(input.country)) {
        throw new Error('Unknown country: ' + input.country);
    }

    metadata.country(input.country);

    // By default, countries only have type regexps when it's required for
    // distinguishing different countries having the same `countryCallingCode`.
    if (metadata.hasTypes()) {
        return getNumberType(input, options, metadata.metadata) !== undefined;
    }

    // If there are no type regexps for this country in metadata then use
    // `nationalNumberPattern` as a "better than nothing" replacement.
    var national_number = options.v2 ? input.nationalNumber : input.phone;
    return matchesEntirely(national_number, metadata.nationalNumberPattern());
}
//# sourceMappingURL=validate_.js.map